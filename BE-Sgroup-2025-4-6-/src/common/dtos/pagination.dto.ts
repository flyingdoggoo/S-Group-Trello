import { extendZodWithOpenApi } from '@asteasolutions/zod-to-openapi';
import { Type } from 'class-transformer';
import { IsInt, IsOptional, IsPositive } from 'class-validator';
import { resourceLimits } from 'worker_threads';
import z from 'zod';

extendZodWithOpenApi(z);

export class PaginationDto {
	page: number = 1;
	limit: number = 10;

	constructor(data: Partial<PaginationDto>) {
		this.page = Number(data.page ?? 1);
		this.limit = Number(data.limit ?? 10);
	}
}

export const PaginationSchema = {
	page: z.coerce.number().int().positive().optional().default(1),
	limit: z.coerce.number().int().positive().optional().default(10),
}