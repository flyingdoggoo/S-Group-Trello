import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardCommentWhereInputSchema } from '../inputTypeSchemas/CardCommentWhereInputSchema'
import { CardCommentOrderByWithAggregationInputSchema } from '../inputTypeSchemas/CardCommentOrderByWithAggregationInputSchema'
import { CardCommentScalarFieldEnumSchema } from '../inputTypeSchemas/CardCommentScalarFieldEnumSchema'
import { CardCommentScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/CardCommentScalarWhereWithAggregatesInputSchema'

export const CardCommentGroupByArgsSchema: z.ZodType<Prisma.CardCommentGroupByArgs> = z.object({
  where: CardCommentWhereInputSchema.optional(), 
  orderBy: z.union([ CardCommentOrderByWithAggregationInputSchema.array(), CardCommentOrderByWithAggregationInputSchema ]).optional(),
  by: CardCommentScalarFieldEnumSchema.array(), 
  having: CardCommentScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default CardCommentGroupByArgsSchema;
