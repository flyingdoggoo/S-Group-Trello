import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardTagCreateManyInputSchema } from '../inputTypeSchemas/CardTagCreateManyInputSchema'

export const CardTagCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CardTagCreateManyAndReturnArgs> = z.object({
  data: z.union([ CardTagCreateManyInputSchema, CardTagCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default CardTagCreateManyAndReturnArgsSchema;
