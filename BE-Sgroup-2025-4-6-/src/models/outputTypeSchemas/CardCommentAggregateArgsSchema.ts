import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardCommentWhereInputSchema } from '../inputTypeSchemas/CardCommentWhereInputSchema'
import { CardCommentOrderByWithRelationInputSchema } from '../inputTypeSchemas/CardCommentOrderByWithRelationInputSchema'
import { CardCommentWhereUniqueInputSchema } from '../inputTypeSchemas/CardCommentWhereUniqueInputSchema'

export const CardCommentAggregateArgsSchema: z.ZodType<Prisma.CardCommentAggregateArgs> = z.object({
  where: CardCommentWhereInputSchema.optional(), 
  orderBy: z.union([ CardCommentOrderByWithRelationInputSchema.array(), CardCommentOrderByWithRelationInputSchema ]).optional(),
  cursor: CardCommentWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default CardCommentAggregateArgsSchema;
