import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardMemberWhereInputSchema } from '../inputTypeSchemas/CardMemberWhereInputSchema'
import { CardMemberOrderByWithRelationInputSchema } from '../inputTypeSchemas/CardMemberOrderByWithRelationInputSchema'
import { CardMemberWhereUniqueInputSchema } from '../inputTypeSchemas/CardMemberWhereUniqueInputSchema'

export const CardMemberAggregateArgsSchema: z.ZodType<Prisma.CardMemberAggregateArgs> = z.object({
  where: CardMemberWhereInputSchema.optional(), 
  orderBy: z.union([ CardMemberOrderByWithRelationInputSchema.array(), CardMemberOrderByWithRelationInputSchema ]).optional(),
  cursor: CardMemberWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default CardMemberAggregateArgsSchema;
