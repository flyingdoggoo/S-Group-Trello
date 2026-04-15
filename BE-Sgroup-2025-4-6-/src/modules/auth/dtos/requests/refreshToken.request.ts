import { ZodValidationSchema } from '@/common';
import z from 'zod';

export class RefreshTokenRequestDto {
	refreshToken?: string;

	constructor(data?: Partial<RefreshTokenRequestDto>) {
		this.refreshToken = data?.refreshToken;
	}
}

const refreshTokenRequestBodySchema = z
	.object({
		refreshToken: z.string().min(1).optional(),
	})
	.strict();

export const RefreshTokenRequestValidationSchema: ZodValidationSchema = {
	body: refreshTokenRequestBodySchema,
};
