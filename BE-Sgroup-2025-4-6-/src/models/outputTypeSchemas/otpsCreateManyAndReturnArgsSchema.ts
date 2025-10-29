import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { otpsCreateManyInputSchema } from '../inputTypeSchemas/otpsCreateManyInputSchema'

export const otpsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.otpsCreateManyAndReturnArgs> = z.object({
  data: z.union([ otpsCreateManyInputSchema, otpsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default otpsCreateManyAndReturnArgsSchema;
