import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BoardCreateManyInputSchema } from '../inputTypeSchemas/BoardCreateManyInputSchema'

export const BoardCreateManyAndReturnArgsSchema: z.ZodType<Prisma.BoardCreateManyAndReturnArgs> = z.object({
  data: z.union([ BoardCreateManyInputSchema, BoardCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default BoardCreateManyAndReturnArgsSchema;
