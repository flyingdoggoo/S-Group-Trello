import { jwtConfig } from '@/configs';
import { Request, Response, NextFunction } from 'express';
import { JsonWebTokenError, TokenExpiredError, verify } from 'jsonwebtoken';
import { StatusCodes } from 'http-status-codes';

import {
	ForbiddenException,
	OptionalException,
	UnauthorizedException,
} from '../exceptions';
import { ITokenPayload } from '../interfaces';
import { autoBindUtil, getCookieValue } from '@/common/utils';

import { PermissionsRepository } from '@/modules/permissions/permissions.repository';
import { UsersRepository } from '@/modules/users/users.repository';
import { UserInformationDto } from '@/modules/users/dtos';

class AuthMiddleware {
	constructor(
		private readonly userRepository = new UsersRepository(),
		private readonly permissionRepository = new PermissionsRepository(),
	) {}

	private extractAccessToken(req: Request): string | undefined {
		const tokenFromCookie = getCookieValue(req.headers.cookie, 'accessToken');
		if (tokenFromCookie) {
			return tokenFromCookie;
		}

		const authHeader = req.headers.authorization;
		if (authHeader && authHeader.startsWith('Bearer ')) {
			const tokenFromBearer = authHeader.substring(7).trim();
			if (tokenFromBearer) {
				return tokenFromBearer;
			}
		}

		return undefined;
	}

	async verifyToken(req: Request, _res: Response, next: NextFunction) {
		try {
			const accessToken = this.extractAccessToken(req);

			if (!accessToken) {
				throw new UnauthorizedException('Access token is required');
			}

			try {
				const payload = verify(
					accessToken,
					jwtConfig.secretAccessToken,
				) as Partial<ITokenPayload>;

				const user = payload.userId
					? await this.userRepository.findUserById(payload.userId)
					: payload.email
						? await this.userRepository.findUser({ email: payload.email })
						: null;

				if (!user) {
					throw new UnauthorizedException('User not found');
				}

				req.user = {
					id: user.id,
					email: user.email,
					name: user.name ?? undefined,
				};

				next();
			} catch (error) {
				if (error instanceof TokenExpiredError) {
					throw new OptionalException(
						StatusCodes.UNAUTHORIZED,
						'Token has expired',
					);
				}
				if (error instanceof JsonWebTokenError) {
					throw new UnauthorizedException('Invalid token');
				}
				throw error;
			}
		} catch (error) {
			next(error);
		}
	}
	verifyPermission(permission: string) {
		return async (req: Request, _res: Response, next: NextFunction) => {
			try {
				const user = (req as any).user as UserInformationDto | undefined;
				if (!user?.id) throw new UnauthorizedException('User not authenticated');
				const ok = await this.permissionRepository.hasPermission(
					user.id,
					permission,
				);
				if (ok) return next();
				throw new ForbiddenException();
			} catch (error) {
				next(error);
			}
		};
	}
}

const authMiddleware = new AuthMiddleware();
autoBindUtil(authMiddleware);

export default authMiddleware;
