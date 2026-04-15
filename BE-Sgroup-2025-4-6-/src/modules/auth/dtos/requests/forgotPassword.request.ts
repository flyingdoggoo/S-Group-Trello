import { ZodValidationSchema } from '@/common';
import z from 'zod';

export class ForgotPasswordRequestDto {
	email: string;

	constructor(data?: Partial<ForgotPasswordRequestDto>) {
		this.email = data?.email ?? '';
	}
}

const forgotPasswordRequestBodySchema = z
	.object({
		email: z.email(),
	})
	.strict();

export const ForgotPasswordRequestValidationSchema: ZodValidationSchema = {
	body: forgotPasswordRequestBodySchema,
};
