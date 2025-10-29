import { ZodValidationSchema } from '@/common';
import z from 'zod';

export class LoginRequestDto {
	email: string;
	password: string;
}

export const LoginRequestValidationSchema: ZodValidationSchema = {
	body: z.object({
		email: z.email(),
		password: z.string().min(8),
	}),
}

export const LoginRequestSchema = {
	body: {
		description: 'Login to your account',
		content: {
			'application/json': {
				schema: LoginRequestValidationSchema.body!,
			},
		},
	},
};
