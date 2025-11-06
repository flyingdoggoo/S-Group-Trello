import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ListWhereInputSchema } from '../inputTypeSchemas/ListWhereInputSchema'

export const ListDeleteManyArgsSchema: z.ZodType<Prisma.ListDeleteManyArgs> = z.object({
  where: ListWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default ListDeleteManyArgsSchema;
