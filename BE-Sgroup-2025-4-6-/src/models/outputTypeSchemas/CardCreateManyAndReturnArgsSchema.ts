import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardCreateManyInputSchema } from '../inputTypeSchemas/CardCreateManyInputSchema'

export const CardCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CardCreateManyAndReturnArgs> = z.object({
  data: z.union([ CardCreateManyInputSchema, CardCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default CardCreateManyAndReturnArgsSchema;
