import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardUpdateManyMutationInputSchema } from '../inputTypeSchemas/CardUpdateManyMutationInputSchema'
import { CardUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/CardUncheckedUpdateManyInputSchema'
import { CardWhereInputSchema } from '../inputTypeSchemas/CardWhereInputSchema'

export const CardUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.CardUpdateManyAndReturnArgs> = z.object({
  data: z.union([ CardUpdateManyMutationInputSchema, CardUncheckedUpdateManyInputSchema ]),
  where: CardWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default CardUpdateManyAndReturnArgsSchema;
