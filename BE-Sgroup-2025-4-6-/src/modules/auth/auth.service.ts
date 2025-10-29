import { UserStatusEnum } from '@prisma/client';
import { Exception } from '@tsed/exceptions';
import { genSalt, hash } from 'bcrypt';
import { StatusCodes } from 'http-status-codes';

import { Prisma } from '../database';
import { UsersRepository } from '../users/users.repository';

import { AuthRepository } from './auth.repository';
import {
	CheckLoginWithGoogleOauthRequestDto,
	LoginRequestDto,
	LoginResponseDto,
	RegisterRequestDto,
	RegisterResponseDto,
} from './dtos';

import {
	ConflictException,
	HttpResponseBodySuccessDto,
	NotFoundException,
	OptionalException,
	signJWT,
} from '@/common';
import { userConfig } from '@/configs';

export class AuthService {
	constructor(
		private readonly authRepository = new AuthRepository(),
		private readonly usersRepository = new UsersRepository(),
	) {}

	async register(
		registerDto: RegisterRequestDto,
	): Promise<HttpResponseBodySuccessDto<RegisterResponseDto> | Exception> {
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
				},
			},
		};

		const newAccount = await this.authRepository.createAccount({ accounts: account });

		return {
			success: true,
			data: new RegisterResponseDto(newAccount),
		};
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
			email: loginInformation.email
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
}
