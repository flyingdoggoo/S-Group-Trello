import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardTagUpdateManyMutationInputSchema } from '../inputTypeSchemas/CardTagUpdateManyMutationInputSchema'
import { CardTagUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/CardTagUncheckedUpdateManyInputSchema'
import { CardTagWhereInputSchema } from '../inputTypeSchemas/CardTagWhereInputSchema'

export const CardTagUpdateManyArgsSchema: z.ZodType<Prisma.CardTagUpdateManyArgs> = z.object({
  data: z.union([ CardTagUpdateManyMutationInputSchema, CardTagUncheckedUpdateManyInputSchema ]),
  where: CardTagWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default CardTagUpdateManyArgsSchema;
