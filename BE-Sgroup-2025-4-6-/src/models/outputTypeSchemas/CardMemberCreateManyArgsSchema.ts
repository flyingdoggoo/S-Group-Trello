import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardMemberCreateManyInputSchema } from '../inputTypeSchemas/CardMemberCreateManyInputSchema'

export const CardMemberCreateManyArgsSchema: z.ZodType<Prisma.CardMemberCreateManyArgs> = z.object({
  data: z.union([ CardMemberCreateManyInputSchema, CardMemberCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default CardMemberCreateManyArgsSchema;
