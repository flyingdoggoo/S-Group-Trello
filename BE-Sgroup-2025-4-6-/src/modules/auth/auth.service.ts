import { UserStatusEnum } from '@prisma/client';
import { Exception } from '@tsed/exceptions';
import { genSalt, hash } from 'bcrypt';
import { StatusCodes } from 'http-status-codes';

import { Prisma } from '../database';
import { UsersRepository } from '../users/users.repository';
import { RolesRepository } from '../roles/roles.repository';
import { RolesEnum } from '@/common/enums';

import { AuthRepository } from './auth.repository';
import {
	CheckLoginWithGoogleOauthRequestDto,
	LoginRequestDto,
	LoginResponseDto,
	RegisterRequestDto,
	RegisterResponseDto,
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
import { userConfig } from '@/configs';
import { UserRoleRepository } from '../role_user/UserRole.repository';
import { InvitationService } from '../invitations/invitation.service';
import { MailsService } from '../mails/mail.service';
import { OtpsService } from '../otps/otps.service';
import { otpsConfig } from '@/configs';
export class AuthService {
	constructor(
		private readonly otpsService = new OtpsService(),
		private readonly mailsService = new MailsService(),
		private readonly authRepository = new AuthRepository(),
		private readonly usersRepository = new UsersRepository(),
		private readonly userRoleRepository = new UserRoleRepository(),
		private readonly rolesRepository = new RolesRepository(),

		private readonly invitationsService = new InvitationService(),
	) {}

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
		const account = await this.authRepository.findAccount({
			email: loginInformation.email,
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

		const { accessToken, refreshToken } = await signJWT({
			userId: account.userId,
			email: loginInformation.email,
		});

		await this.authRepository.createToken({
			token: {
				refreshToken: refreshToken,
				user: {
					connect: {
						id: account.userId,
					},
				},
			},
		});

		return {
			success: true,
			data: {
				accessToken: accessToken,
				refreshToken: refreshToken,
			},
			cookies: {
				accessToken: accessToken,
				refreshToken: refreshToken,
			},
		};
	}

	async CheckLoginWithGoogleOauth(
		googleAuthData: CheckLoginWithGoogleOauthRequestDto,
	): Promise<HttpResponseBodySuccessDto<LoginResponseDto> | Exception> {
		const { socialAccountInformation } = googleAuthData;

		const { accessToken, refreshToken } = await signJWT({
			userId: socialAccountInformation.userId,
		});

		await this.authRepository.createToken({
			token: {
				refreshToken: refreshToken,
				user: {
					connect: {
						id: socialAccountInformation.userId,
					},
				},
			},
		});

		return {
			success: true,
			data: {
				accessToken: accessToken,
				refreshToken: refreshToken,
			},
			cookies: {
				accessToken: accessToken,
				refreshToken: refreshToken,
			},
		};
	}

	async sendOtp(sendOtpRequestDto: SendOtpRequestDto): Promise<boolean | Exception> {
		const { email } = sendOtpRequestDto;
		const user = await this.usersRepository.findUser({ email: email });
		if (!user) {
			console.log('User not found for email:', email);
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
		const { email, otp } = verifyRequestDto;
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

		try {
			const pendingInvitations =
				await this.invitationsService.findPendingInvitationsByEmail(email);
			if (pendingInvitations && pendingInvitations.data.length > 0) {
				for (const invitation of pendingInvitations.data) {
					await this.invitationsService.acceptInvitation(
						invitation.token,
						account.userId,
					);
				}
			}
		} catch (error) {
			console.log('Error processing invitations during verification:', error);
		}
		const accountResponse = new AccountResponseDto(account);
		accountResponse.verify = true;

		return {
			success: true,
			data: accountResponse,
		};
	}
}
