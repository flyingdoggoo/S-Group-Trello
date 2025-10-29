import { Exception } from '@tsed/exceptions';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import passport from 'passport';

import { AuthService } from './auth.service';
import {
	LoginRequestDto,
	LoginResponseDto,
	RegisterRequestDto,
	RegisterResponseDto,
} from './dtos';

import type { CheckLoginWithGoogleOauthRequestDto } from './dtos';

import {
	HttpResponseDto,
	InternalServerException,
	NotFoundException,
	OptionalException,
} from '@/common';

export class AuthController {
	constructor(private readonly authService = new AuthService()) {}

	async register(req: Request): Promise<Response> {
		const registerDto = req.body as RegisterRequestDto;
		const result = await this.authService.register(registerDto);
		if (result instanceof Exception) {
			return new HttpResponseDto().exception(result);
		}
		return new HttpResponseDto().created<RegisterResponseDto>(result);
	}

	async login(req: Request): Promise<Response> {
		const loginDto = req.body as LoginRequestDto;
		const result = await this.authService.login(loginDto);
		if (result instanceof Exception) {
			return new HttpResponseDto().exception(result);
		}
		return new HttpResponseDto().success<LoginResponseDto>(result);
	}

	// Redirect to Google OAuth
	async googleAuth(): Promise<void> {
		passport.authenticate('google', {
			scope: ['profile', 'email'],
			accessType: 'offline',
			prompt: 'consent',
		});
	}

	// Handle Google OAuth callback
	googleCallback = (
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<Response | Exception> | void => {
		passport.authenticate(
			'google',
			{
				session: false,
				failureRedirect: '/auth/google/login/failure',
			},
			async (
				err: Error | null,
				user: CheckLoginWithGoogleOauthRequestDto,
				_info: unknown,
			) => {
				if (err) {
					throw new InternalServerException();
				}

				if (!user) {
					throw new NotFoundException('user for google login');
				}

				const result = await this.authService.CheckLoginWithGoogleOauth(user);

				if (result instanceof Exception) {
					return new HttpResponseDto().exception(result);
				}
				return new HttpResponseDto().success<LoginResponseDto>(result);
			},
		)(req, res, next);
	};

	authFailure = (): Exception => {
		throw new OptionalException(StatusCodes.UNAUTHORIZED, 'Authentication Failed');
	};
}
