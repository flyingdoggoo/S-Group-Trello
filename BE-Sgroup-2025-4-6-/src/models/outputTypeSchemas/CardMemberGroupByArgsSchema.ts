import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardMemberWhereInputSchema } from '../inputTypeSchemas/CardMemberWhereInputSchema'
import { CardMemberOrderByWithAggregationInputSchema } from '../inputTypeSchemas/CardMemberOrderByWithAggregationInputSchema'
import { CardMemberScalarFieldEnumSchema } from '../inputTypeSchemas/CardMemberScalarFieldEnumSchema'
import { CardMemberScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/CardMemberScalarWhereWithAggregatesInputSchema'

export const CardMemberGroupByArgsSchema: z.ZodType<Prisma.CardMemberGroupByArgs> = z.object({
  where: CardMemberWhereInputSchema.optional(), 
  orderBy: z.union([ CardMemberOrderByWithAggregationInputSchema.array(), CardMemberOrderByWithAggregationInputSchema ]).optional(),
  by: CardMemberScalarFieldEnumSchema.array(), 
  having: CardMemberScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default CardMemberGroupByArgsSchema;
