import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BoardMemberWhereInputSchema } from '../inputTypeSchemas/BoardMemberWhereInputSchema'

export const BoardMemberDeleteManyArgsSchema: z.ZodType<Prisma.BoardMemberDeleteManyArgs> = z.object({
  where: BoardMemberWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default BoardMemberDeleteManyArgsSchema;
