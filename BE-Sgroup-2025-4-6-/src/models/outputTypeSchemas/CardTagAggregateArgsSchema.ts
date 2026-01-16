import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardTagWhereInputSchema } from '../inputTypeSchemas/CardTagWhereInputSchema'
import { CardTagOrderByWithRelationInputSchema } from '../inputTypeSchemas/CardTagOrderByWithRelationInputSchema'
import { CardTagWhereUniqueInputSchema } from '../inputTypeSchemas/CardTagWhereUniqueInputSchema'

export const CardTagAggregateArgsSchema: z.ZodType<Prisma.CardTagAggregateArgs> = z.object({
  where: CardTagWhereInputSchema.optional(), 
  orderBy: z.union([ CardTagOrderByWithRelationInputSchema.array(), CardTagOrderByWithRelationInputSchema ]).optional(),
  cursor: CardTagWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default CardTagAggregateArgsSchema;
