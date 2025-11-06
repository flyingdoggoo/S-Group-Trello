import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BoardMemberCreateManyInputSchema } from '../inputTypeSchemas/BoardMemberCreateManyInputSchema'

export const BoardMemberCreateManyAndReturnArgsSchema: z.ZodType<Prisma.BoardMemberCreateManyAndReturnArgs> = z.object({
  data: z.union([ BoardMemberCreateManyInputSchema, BoardMemberCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default BoardMemberCreateManyAndReturnArgsSchema;
