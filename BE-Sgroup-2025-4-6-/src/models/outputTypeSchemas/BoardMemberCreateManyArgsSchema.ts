import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BoardMemberCreateManyInputSchema } from '../inputTypeSchemas/BoardMemberCreateManyInputSchema'

export const BoardMemberCreateManyArgsSchema: z.ZodType<Prisma.BoardMemberCreateManyArgs> = z.object({
  data: z.union([ BoardMemberCreateManyInputSchema, BoardMemberCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default BoardMemberCreateManyArgsSchema;
