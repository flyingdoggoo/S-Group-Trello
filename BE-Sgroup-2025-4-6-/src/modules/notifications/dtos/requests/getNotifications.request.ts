import { PaginationDto, PaginationSchema, ZodValidationSchema } from '@/common';
import z from 'zod';

const BooleanFromStringSchema = z.preprocess((value) => {
	if (value === undefined || value === null || value === '') {
		return undefined;
	}

	if (typeof value === 'boolean') {
		return value;
	}

	if (typeof value === 'string') {
		const normalized = value.trim().toLowerCase();
		if (normalized === 'true') {
			return true;
		}
		if (normalized === 'false') {
			return false;
		}
	}

	return value;
}, z.boolean());

export class GetNotificationsRequestDto extends PaginationDto {
	isRead?: boolean;

	constructor(data?: Partial<GetNotificationsRequestDto> | Record<string, unknown>) {
		super({
			page: Number(data?.page ?? 1),
			limit: Number(data?.limit ?? 10),
		});

		const rawIsRead = data?.isRead;
		if (typeof rawIsRead === 'boolean') {
			this.isRead = rawIsRead;
		} else if (typeof rawIsRead === 'string') {
			const normalized = rawIsRead.trim().toLowerCase();
			if (normalized === 'true') {
				this.isRead = true;
			} else if (normalized === 'false') {
				this.isRead = false;
			}
		}
	}
}

const getNotificationsQuerySchema = z
	.object({
		isRead: BooleanFromStringSchema.optional(),
	})
	.extend(PaginationSchema)
	.strict();

export const GetNotificationsRequestValidationSchema: ZodValidationSchema = {
	query: getNotificationsQuerySchema,
};
