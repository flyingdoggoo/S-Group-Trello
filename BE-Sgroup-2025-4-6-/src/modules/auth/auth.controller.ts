import { Exception } from '@/common/exceptions/base.exception';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import passport from 'passport';

import { AuthService } from './auth.service';
import {
	LoginRequestDto,
	LoginResponseDto,
	ForgotPasswordRequestDto,
	LogoutRequestDto,
	RegisterRequestDto,
	ResetPasswordRequestDto,
	RegisterResponseDto,
	RefreshTokenRequestDto,
} from './dtos';

import type {
	AccountResponseDto,
	CheckLoginWithGoogleOauthRequestDto,
	VerifyRequestDto,
} from './dtos';
import type { HttpResponseBodySuccessDto } from '@/common';
import { appEnv, GoogleOauthConfig } from '@/configs';

import {
	HttpResponseDto,
	InternalServerException,
	NotFoundException,
	OptionalException,
	getCookieValue,
	getResponse,
} from '@/common';

export class AuthController {
	constructor(private readonly authService = new AuthService()) {}

	private resolveGoogleCallbackUrl(req: Request): string {
		const configuredCallbackUrl = GoogleOauthConfig.redirectUri.trim();
		const configuredUsesLocalhost = /localhost|127\.0\.0\.1/i.test(
			configuredCallbackUrl,
		);

		if (
			configuredCallbackUrl &&
			(appEnv.NODE_ENV !== 'production' || !configuredUsesLocalhost)
		) {
			return configuredCallbackUrl;
		}

		const forwardedProto = req.headers['x-forwarded-proto'];
		const forwardedHost = req.headers['x-forwarded-host'];

		const protocol =
			typeof forwardedProto === 'string' && forwardedProto.length > 0
				? forwardedProto.split(',')[0].trim()
				: req.protocol;
		const host =
			typeof forwardedHost === 'string' && forwardedHost.length > 0
				? forwardedHost.split(',')[0].trim()
				: req.get('host') || '';

		if (host) {
			return `${protocol}://${host}/auth/google/callback`;
		}

		return configuredCallbackUrl || `http://localhost:${appEnv.PORT}/auth/google/callback`;
	}

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

	async refreshToken(req: Request): Promise<Response> {
		const body = req.body as RefreshTokenRequestDto;
		const tokenFromCookie = getCookieValue(req.headers.cookie, 'refreshToken');
		const refreshToken = body.refreshToken || tokenFromCookie || '';

		const result = await this.authService.refreshToken(refreshToken);
		if (result instanceof Exception) {
			return new HttpResponseDto().exception(result);
		}

		return new HttpResponseDto().success<LoginResponseDto>(result);
	}

	async logout(req: Request): Promise<Response> {
		const body = req.body as LogoutRequestDto;
		const tokenFromCookie = getCookieValue(req.headers.cookie, 'refreshToken');
		const result = await this.authService.logout({
			refreshToken: body.refreshToken || tokenFromCookie,
		});

		if (result instanceof Exception) {
			return new HttpResponseDto().exception(result);
		}

		const res = getResponse();
		const cookieOptions = {
			httpOnly: true,
			secure: appEnv.NODE_ENV === 'production',
			sameSite: 'lax' as const,
			path: '/',
		};

		res.clearCookie('accessToken', cookieOptions);
		res.clearCookie('refreshToken', cookieOptions);

		return new HttpResponseDto().success(result);
	}

	async forgotPasswordSendOtp(req: Request): Promise<Response> {
		const dto = req.body as ForgotPasswordRequestDto;
		const result = await this.authService.sendForgotPasswordOtp(dto);

		if (result instanceof Exception) {
			return new HttpResponseDto().exception(result);
		}

		return new HttpResponseDto().success(result);
	}

	async resetPassword(req: Request): Promise<Response> {
		const dto = req.body as ResetPasswordRequestDto;
		const result = await this.authService.resetPassword(dto);

		if (result instanceof Exception) {
			return new HttpResponseDto().exception(result);
		}

		return new HttpResponseDto().success(result);
	}

	// Redirect to Google OAuth (must return middleware invocation)
	googleAuth = (req: Request, res: Response, next: NextFunction): void => {
		const callbackURL = this.resolveGoogleCallbackUrl(req);
		const options: any = {
			scope: ['profile', 'email'],
			accessType: 'offline',
			prompt: 'consent',
			callbackURL,
			session: false,
		};

		return passport.authenticate('google', options)(req, res, next);
	};

	// Handle Google OAuth callback
	googleCallback = (
		req: Request,
		res: Response,
		next: NextFunction,
	): Promise<Response | Exception> | void => {
		const callbackURL = this.resolveGoogleCallbackUrl(req);
		const options: any = {
			session: false,
			callbackURL,
			failureRedirect: '/auth/google/login/failure',
		};

		passport.authenticate(
			'google',
			options,
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

				// Set cookies explicitly (since we are redirecting, setCookieMiddleware won't run)
				const success = result as HttpResponseBodySuccessDto<LoginResponseDto>;
				const cookies = success.cookies || {};
				const defaultCookieOptions = {
					httpOnly: true,
					secure: appEnv.NODE_ENV === 'production',
					sameSite: 'lax' as const,
					path: '/',
				};
				Object.entries(cookies).forEach(([name, value]) => {
					res.cookie(name, String(value), defaultCookieOptions);
				});

				// Redirect to frontend after success
				const frontendUrl = appEnv.CORS_ORIGIN || 'http://localhost:5173';
				return res.redirect(frontendUrl);
			},
		)(req, res, next);
	};

	authFailure = (_req: Request, _res: Response): Exception => {
		throw new OptionalException(StatusCodes.UNAUTHORIZED, 'Authentication Failed');
	};

	async verify(req: Request): Promise<Response> {
		const verifyRequestDto = req.body as VerifyRequestDto;
		const result = await this.authService.verify(verifyRequestDto);
		if (result instanceof Exception) {
			return new HttpResponseDto().exception(result);
		}
		return new HttpResponseDto().success<AccountResponseDto>(result);
	}
}
