import { jwtConfig } from '@/configs';
import { Request, Response, NextFunction } from 'express';
import { JsonWebTokenError, TokenExpiredError, verify } from 'jsonwebtoken';
import {
	ForbiddenException,
	OptionalException,
	UnauthorizedException,
} from '../exceptions';
import { StatusCodes } from 'http-status-codes';
import { ITokenPayload } from '../interfaces';
import { UsersRepository } from '@/modules/users/users.repository';
import { users } from '@/models/modelSchema/usersSchema';
import { autoBindUtil } from '@/common/utils';
import { UserInformationDto } from '@/modules/users/dtos';
import { RolesRepository } from '@/modules/roles/roles.repository';
import { PermissionsRepository } from '@/modules/permissions/permissions.repository';
import { ca } from 'zod/v4/locales';
class AuthMiddleware {
	constructor(
		private readonly userRepository = new UsersRepository(),
		private readonly roleRepository = new RolesRepository(),
		private readonly permissionRepository = new PermissionsRepository(),
	) {}

	async verifyToken(req: Request, res: Response, next: NextFunction) {
		try {
			const authHeader = req.headers.authorization;

			console.log('=== AUTH MIDDLEWARE DEBUG ===');
			console.log('Full headers:', req.headers);
			console.log('Authorization header:', authHeader);

			if (!authHeader || !authHeader.startsWith('Bearer ')) {
				console.log('ERROR: No Bearer token found');
				throw new UnauthorizedException('Access token is required');
			}

			const accessToken = authHeader.substring(7); // Remove 'Bearer ' prefix
			console.log('Extracted token:', accessToken);

			if (!accessToken) {
				console.log('ERROR: Token is empty after extraction');
				throw new UnauthorizedException('Access token is required');
			}

			try {
				// Verify token
				console.log('Verifying token with secret...');
				const payload = verify(
					accessToken,
					jwtConfig.secretAccessToken,
				) as ITokenPayload;
				console.log('Token payload:', payload);

				// Lấy thông tin user từ database
				const user = await this.userRepository.findUser({ email: payload.email });
				console.log('User found:', user ? 'YES' : 'NO');

				if (!user) {
					console.log('ERROR: User not found in database');
					throw new UnauthorizedException('User not found');
				}

				// Gán user vào request
				(req as any).user = user;
				console.log('=== AUTH SUCCESS ===');

				next();
			} catch (error) {
				console.log('ERROR during token verification:', error);
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
				console.log('User does not have permission:', permission);
			} catch (error) {
				next(error);
			}
		};
	}
}

const authMiddleware = new AuthMiddleware();
autoBindUtil(authMiddleware);

export default authMiddleware;
