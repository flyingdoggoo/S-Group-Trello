import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardTagWhereInputSchema } from '../inputTypeSchemas/CardTagWhereInputSchema'
import { CardTagOrderByWithAggregationInputSchema } from '../inputTypeSchemas/CardTagOrderByWithAggregationInputSchema'
import { CardTagScalarFieldEnumSchema } from '../inputTypeSchemas/CardTagScalarFieldEnumSchema'
import { CardTagScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/CardTagScalarWhereWithAggregatesInputSchema'

export const CardTagGroupByArgsSchema: z.ZodType<Prisma.CardTagGroupByArgs> = z.object({
  where: CardTagWhereInputSchema.optional(), 
  orderBy: z.union([ CardTagOrderByWithAggregationInputSchema.array(), CardTagOrderByWithAggregationInputSchema ]).optional(),
  by: CardTagScalarFieldEnumSchema.array(), 
  having: CardTagScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default CardTagGroupByArgsSchema;
