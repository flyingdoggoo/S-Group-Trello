import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardMemberUpdateManyMutationInputSchema } from '../inputTypeSchemas/CardMemberUpdateManyMutationInputSchema'
import { CardMemberUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/CardMemberUncheckedUpdateManyInputSchema'
import { CardMemberWhereInputSchema } from '../inputTypeSchemas/CardMemberWhereInputSchema'

export const CardMemberUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.CardMemberUpdateManyAndReturnArgs> = z.object({
  data: z.union([ CardMemberUpdateManyMutationInputSchema, CardMemberUncheckedUpdateManyInputSchema ]),
  where: CardMemberWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default CardMemberUpdateManyAndReturnArgsSchema;
