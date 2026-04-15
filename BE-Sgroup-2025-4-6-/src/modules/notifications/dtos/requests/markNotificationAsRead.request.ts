import { ZodValidationSchema } from '@/common';
import z from 'zod';

export class MarkNotificationAsReadRequestDto {
	id: string;

	constructor(data?: Partial<MarkNotificationAsReadRequestDto>) {
		this.id = data?.id ?? '';
	}
}

const markNotificationAsReadParamsSchema = z
	.object({
		id: z.string().min(1),
	})
	.strict();

export const MarkNotificationAsReadValidationSchema: ZodValidationSchema = {
	params: markNotificationAsReadParamsSchema,
};
