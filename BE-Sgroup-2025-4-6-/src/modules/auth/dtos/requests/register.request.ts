import { ZodValidationSchema } from '@/common';
import z from 'zod';

export class RegisterRequestDto {
	email: string;
	password: string;
	name: string;
}

export const RegisterRequestValidationSchema: ZodValidationSchema = {
	body: z.object({
		email: z.email(),
		password: z.string().min(8),
		name: z.string().min(2).max(100),
	}),
}

export const RegisterRequestSchema = {
	body: {
		description: 'Create a new account',
		content: {
			'application/json': {
				schema: RegisterRequestValidationSchema.body!,
			},
		},
	},
};
