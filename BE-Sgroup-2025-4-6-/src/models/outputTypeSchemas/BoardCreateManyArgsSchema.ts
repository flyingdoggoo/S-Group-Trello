import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BoardCreateManyInputSchema } from '../inputTypeSchemas/BoardCreateManyInputSchema'

export const BoardCreateManyArgsSchema: z.ZodType<Prisma.BoardCreateManyArgs> = z.object({
  data: z.union([ BoardCreateManyInputSchema, BoardCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default BoardCreateManyArgsSchema;
