import { ZodValidationSchema } from '@/common';
import { z } from 'zod';

export class CreateInvitationRequestDto {
	email: string;
	projectId?: string;
	boardId?: string;
	roleId?: string;

	constructor(data?: Partial<CreateInvitationRequestDto>) {
		this.email = data?.email ?? '';
		this.projectId = data?.projectId;
		this.boardId = data?.boardId;
		this.roleId = data?.roleId;
	}
}

export const CreateInvitationRequestSchema = z.object({
	email: z.string().email(),
	projectId: z.string().optional(),
	boardId: z.string().optional(),
	roleId: z.string().optional(),
});

export const CreateInvitationRequestValidationSchema: ZodValidationSchema = {
	body: CreateInvitationRequestSchema,
};
