import { LoginRequestDto } from './../requests/login.request';
import z from 'zod';

export class LoginResponseDto {
	accessToken: string;
	refreshToken: string;
}

export const LoginResponseDtoSchema = z.object({
	accessToken: z.jwt(),
	refreshToken: z.jwt(),
});
