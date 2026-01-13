import { ZodValidationSchema } from '@/common';
import { z } from 'zod';

export class AcceptInvitationRequestDto {
	token: string;
	constructor(data?: Partial<AcceptInvitationRequestDto>) {
		this.token = data?.token ?? '';
	}
}

export const AcceptInvitationRequestSchema = z.object({
	token: z.string(),
});
export const AcceptInvitationRequestValidationSchema: ZodValidationSchema = {
	body: AcceptInvitationRequestSchema,
};
