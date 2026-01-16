import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardMemberCreateManyInputSchema } from '../inputTypeSchemas/CardMemberCreateManyInputSchema'

export const CardMemberCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CardMemberCreateManyAndReturnArgs> = z.object({
  data: z.union([ CardMemberCreateManyInputSchema, CardMemberCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default CardMemberCreateManyAndReturnArgsSchema;
