import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BoardWhereInputSchema } from '../inputTypeSchemas/BoardWhereInputSchema'

export const BoardDeleteManyArgsSchema: z.ZodType<Prisma.BoardDeleteManyArgs> = z.object({
  where: BoardWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default BoardDeleteManyArgsSchema;
