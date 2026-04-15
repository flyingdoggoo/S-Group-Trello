import { ZodValidationSchema } from '@/common';
import z from 'zod';

export class LogoutRequestDto {
	refreshToken?: string;

	constructor(data?: Partial<LogoutRequestDto>) {
		this.refreshToken = data?.refreshToken;
	}
}

const logoutRequestBodySchema = z
	.object({
		refreshToken: z.string().min(1).optional(),
	})
	.strict();

export const LogoutRequestValidationSchema: ZodValidationSchema = {
	body: logoutRequestBodySchema,
};
