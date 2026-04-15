import { UserStatusEnum } from '@prisma/client';
import { Exception } from '@/common/exceptions/base.exception';
import { genSalt, hash } from 'bcrypt';
import { StatusCodes } from 'http-status-codes';
import { JsonWebTokenError, TokenExpiredError, verify } from 'jsonwebtoken';

import { Prisma } from '../database';
import { UsersRepository } from '../users/users.repository';
import { RolesRepository } from '../roles/roles.repository';
import { RolesEnum } from '@/common/enums';

import { AuthRepository } from './auth.repository';
import {
	CheckLoginWithGoogleOauthRequestDto,
	ForgotPasswordRequestDto,
	LoginRequestDto,
	LoginResponseDto,
	LogoutRequestDto,
	RegisterRequestDto,
	ResetPasswordRequestDto,
	SendOtpRequestDto,
	VerifyRequestDto,
	AccountResponseDto,
} from './dtos';

import {
	ConflictException,
	HttpResponseBodySuccessDto,
	NotFoundException,
	OptionalException,
	signJWT,
} from '@/common';
import { jwtConfig, otpsConfig, userConfig } from '@/configs';
import { UserRoleRepository } from '../role_user/UserRole.repository';
import { MailsService } from '../mails/mail.service';
import { OtpsService } from '../otps/otps.service';

export class AuthService {
	constructor(
		private readonly otpsService = new OtpsService(),
		private readonly mailsService = new MailsService(),
		private readonly authRepository = new AuthRepository(),
		private readonly usersRepository = new UsersRepository(),
		private readonly userRoleRepository = new UserRoleRepository(),
		private readonly rolesRepository = new RolesRepository(),
	) {}

	private async ensureDefaultUserRole(userId: string): Promise<void> {
		const defaultUserRole = await this.rolesRepository.findByName(RolesEnum.USER);
		if (!defaultUserRole) {
			throw new NotFoundException('USER role');
		}

		const hasDefaultRole = await this.userRoleRepository.hasRole(
			userId,
			defaultUserRole.id,
		);

		if (!hasDefaultRole) {
			await this.userRoleRepository.assignUserRoleProject(
				userId,
				defaultUserRole.id,
			);
		}
	}

	private async issueAuthTokens(params: {
		userId: string;
		email?: string;
	}): Promise<HttpResponseBodySuccessDto<LoginResponseDto>> {
		const payload: Record<string, unknown> = {
			userId: params.userId,
		};
		if (params.email) {
			payload.email = params.email;
		}

		const { accessToken, refreshToken } = await signJWT(payload);

		await this.authRepository.createToken({
			token: {
				refreshToken,
				user: {
					connect: {
						id: params.userId,
					},
				},
			},
		});

		return {
			success: true,
			data: {
				accessToken,
				refreshToken,
			},
			cookies: {
				accessToken,
				refreshToken,
			},
		};
	}

	async register(
		registerDto: RegisterRequestDto,
	): Promise<HttpResponseBodySuccessDto<any> | Exception> {
		try {
			const user = await this.usersRepository.findUser({
				email: registerDto.email,
			});

			if (user) {
				throw new ConflictException('email');
			}

			const salt = await genSalt(10);
			const hashedPassword = await hash(registerDto.password, salt);

			const account: Prisma.accountsCreateInput = {
				salt: salt,
				password: hashedPassword,
				user: {
					create: {
						email: registerDto.email,
						name: registerDto.name,
						avatar: userConfig.defaultAvatarUrl,
						verify: false,
						status: UserStatusEnum.active,
					},
				},
			};

			const newAccount = await this.authRepository.createAccount({
				accounts: account,
			});

			const desiredRoleName = registerDto.role ?? RolesEnum.USER;
			const role = await this.rolesRepository.findByName(desiredRoleName);
			console.log('role', role);
			if (role && newAccount.user?.id) {
				await this.userRoleRepository.assignUserRoleProject(
					newAccount.user.id,
					role.id,
				);
				console.log('OK');
			}

			//implement invitation acceptance

			await this.sendOtp({ email: registerDto.email });
			console.log('OTP sent');
			return {
				success: true,
				// data: new RegisterResponseDto(newAccount),
				data: { message: 'Registration successful. Please verify your email.' },
			};
		} catch (error) {
			console.log('Error during registration:', error);
			throw error;
		}
	}

	async login(
		loginInformation: LoginRequestDto,
	): Promise<HttpResponseBodySuccessDto<LoginResponseDto> | Exception> {
		const normalizedEmail = loginInformation.email.trim().toLowerCase();
		const account = await this.authRepository.findAccount({
			email: normalizedEmail,
		});

		if (!account) {
			throw new NotFoundException('email');
		}

		if (account.user?.verify === false) {
			throw new OptionalException(
				StatusCodes.FORBIDDEN,
				'Please verify your email before logging in',
			);
		}
		if (account.user?.status === UserStatusEnum.locked) {
			throw new OptionalException(
				StatusCodes.FORBIDDEN,
				'Your account has been locked',
			);
		}

		const hashedPassword = await hash(loginInformation.password, account.salt);
		if (hashedPassword !== account.password) {
			throw new OptionalException(StatusCodes.UNAUTHORIZED, 'Invalid password');
		}

		await this.ensureDefaultUserRole(account.userId);

		return this.issueAuthTokens({
			userId: account.userId,
			email: account.user?.email,
		});
	}

	async CheckLoginWithGoogleOauth(
		googleAuthData: CheckLoginWithGoogleOauthRequestDto,
	): Promise<HttpResponseBodySuccessDto<LoginResponseDto> | Exception> {
		const { socialAccountInformation } = googleAuthData;

		await this.ensureDefaultUserRole(socialAccountInformation.userId);

		return this.issueAuthTokens({
			userId: socialAccountInformation.userId,
			email: socialAccountInformation.user?.email,
		});
	}

	async refreshToken(
		refreshToken: string,
	): Promise<HttpResponseBodySuccessDto<LoginResponseDto> | Exception> {
		if (!refreshToken) {
			throw new OptionalException(
				StatusCodes.UNAUTHORIZED,
				'Refresh token is required',
			);
		}

		try {
			const payload = verify(
				refreshToken,
				jwtConfig.secretRefreshToken,
			) as Record<string, unknown>;

			const userId = String(payload.userId ?? '');
			if (!userId) {
				throw new OptionalException(
					StatusCodes.UNAUTHORIZED,
					'Invalid refresh token payload',
				);
			}

			const [tokenRecord, user] = await Promise.all([
				this.authRepository.findTokenByRefreshToken(refreshToken),
				this.usersRepository.findUserById(userId),
			]);

			if (!tokenRecord) {
				throw new OptionalException(
					StatusCodes.UNAUTHORIZED,
					'Refresh token is not recognized',
				);
			}

			if (!user) {
				throw new OptionalException(StatusCodes.UNAUTHORIZED, 'User not found');
			}

			if (user.status === UserStatusEnum.locked) {
				throw new OptionalException(
					StatusCodes.FORBIDDEN,
					'Your account has been locked',
				);
			}

			await this.authRepository.deleteTokenByRefreshToken(refreshToken);

			return this.issueAuthTokens({
				userId: user.id,
				email: user.email,
			});
		} catch (error) {
			if (error instanceof OptionalException) {
				throw error;
			}
			if (error instanceof TokenExpiredError) {
				throw new OptionalException(
					StatusCodes.UNAUTHORIZED,
					'Refresh token has expired',
				);
			}
			if (error instanceof JsonWebTokenError) {
				throw new OptionalException(
					StatusCodes.UNAUTHORIZED,
					'Invalid refresh token',
				);
			}
			throw error;
		}
	}

	async logout(
		logoutDto: LogoutRequestDto,
	): Promise<HttpResponseBodySuccessDto<{ message: string }> | Exception> {
		if (logoutDto.refreshToken) {
			await this.authRepository.deleteTokenByRefreshToken(logoutDto.refreshToken);
		}

		return {
			success: true,
			data: {
				message: 'Logged out successfully',
			},
		};
	}

	async sendForgotPasswordOtp(
		dto: ForgotPasswordRequestDto,
	): Promise<HttpResponseBodySuccessDto<{ message: string }> | Exception> {
		const normalizedEmail = dto.email.trim().toLowerCase();
		const account = await this.authRepository.findAccount({
			email: normalizedEmail,
			status: UserStatusEnum.active,
		});

		if (!account || !account.user) {
			return {
				success: true,
				data: {
					message:
						'If this email exists, a password reset OTP has been sent.',
				},
			};
		}

		const otp = await this.otpsService.generateOtp({ userId: account.user.id });

		await this.mailsService.sendEmail({
			recipients: [
				{
					address: account.user.email,
					name: account.user.name || 'User',
				},
			],
			subject: 'Password reset OTP',
			html: `Your password reset OTP is "${otp.otp}". It will expire in ${otpsConfig.otpExpiresIn} minutes.`,
		});

		return {
			success: true,
			data: {
				message: 'Password reset OTP sent successfully',
			},
		};
	}

	async resetPassword(
		dto: ResetPasswordRequestDto,
	): Promise<HttpResponseBodySuccessDto<{ message: string }> | Exception> {
		const normalizedEmail = dto.email.trim().toLowerCase();
		const account = await this.authRepository.findAccount({
			email: normalizedEmail,
			status: UserStatusEnum.active,
		});

		if (!account || !account.user) {
			throw new NotFoundException('account');
		}

		const isValidOtp = await this.otpsService.verifyOtp({
			userId: account.userId,
			otp: dto.otp,
		});

		if (!isValidOtp) {
			throw new OptionalException(StatusCodes.BAD_REQUEST, 'Invalid OTP');
		}

		const salt = await genSalt(10);
		const password = await hash(dto.newPassword, salt);

		await this.authRepository.updateAccountPassword({
			userId: account.userId,
			password,
			salt,
		});

		await this.authRepository.deleteTokensByUserId(account.userId);

		return {
			success: true,
			data: {
				message: 'Password reset successfully',
			},
		};
	}

	async sendOtp(sendOtpRequestDto: SendOtpRequestDto): Promise<boolean | Exception> {
		const email = sendOtpRequestDto.email.trim().toLowerCase();
		const user = await this.usersRepository.findUser({ email });
		if (!user) {
			throw new NotFoundException('email');
		}

		const otp = await this.otpsService.generateOtp({ userId: user.id });

		await this.mailsService.sendEmail({
			recipients: [
				{
					address: user.email,
					name: user.name || 'User',
				},
			],
			subject: 'Mã xác thực',
			html: `Mã xác thực của bạn là "${otp.otp}". Nó có hiệu lực trong ${otpsConfig.otpExpiresIn} phút. Vui lòng không chia sẻ mã này với bất kỳ ai.`,
		});
		return true;
	}

	async verify(
		verifyRequestDto: VerifyRequestDto,
	): Promise<HttpResponseBodySuccessDto<AccountResponseDto> | Exception> {
		const email = verifyRequestDto.email.trim().toLowerCase();
		const { otp } = verifyRequestDto;
		const account = await this.authRepository.findAccount({
			email: email,
			status: UserStatusEnum.active,
		});
		if (!account || !account.user) {
			throw new NotFoundException('account');
		}

		if (account.user.verify === true) {
			throw new OptionalException(
				StatusCodes.CONFLICT,
				'Account is already verified',
			);
		}

		const isValidOtp = await this.otpsService.verifyOtp({
			userId: account.userId,
			otp: otp,
		});
		if (!isValidOtp) {
			throw new OptionalException(StatusCodes.BAD_REQUEST, 'Invalid OTP');
		}

		await this.usersRepository.updateUser({
			userId: account.userId,
			user: {
				verify: true,
			},
		});

		// Invitations are no longer auto-accepted on verify.
		// Users must explicitly accept/reject each invitation.
		const accountResponse = new AccountResponseDto(account);
		accountResponse.verify = true;

		return {
			success: true,
			data: accountResponse,
		};
	}
}
