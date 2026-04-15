import { ZodValidationSchema } from '@/common';
import z from 'zod';

export class ResetPasswordRequestDto {
	email: string;
	otp: string;
	newPassword: string;

	constructor(data?: Partial<ResetPasswordRequestDto>) {
		this.email = data?.email ?? '';
		this.otp = data?.otp ?? '';
		this.newPassword = data?.newPassword ?? '';
	}
}

const resetPasswordRequestBodySchema = z
	.object({
		email: z.email(),
		otp: z.string().length(6),
		newPassword: z.string().min(8),
	})
	.strict();

export const ResetPasswordRequestValidationSchema: ZodValidationSchema = {
	body: resetPasswordRequestBodySchema,
};
