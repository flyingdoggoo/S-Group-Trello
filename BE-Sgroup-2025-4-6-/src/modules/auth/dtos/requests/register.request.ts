import { ZodValidationSchema } from '@/common';
import { RolesEnum } from '@/common/enums';
import z from 'zod';

export class RegisterRequestDto {
	email: string;
	password: string;
	name: string;
	role?: RolesEnum;
}

export const RegisterRequestValidationSchema: ZodValidationSchema = {
	body: z.object({
		email: z.email(),
		password: z.string().min(8),
		name: z.string().min(2).max(100),
		role: z.nativeEnum(RolesEnum).optional().describe('Optional role; default USER'),
	}),
};
