import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardTodoWhereInputSchema } from '../inputTypeSchemas/CardTodoWhereInputSchema'
import { CardTodoOrderByWithAggregationInputSchema } from '../inputTypeSchemas/CardTodoOrderByWithAggregationInputSchema'
import { CardTodoScalarFieldEnumSchema } from '../inputTypeSchemas/CardTodoScalarFieldEnumSchema'
import { CardTodoScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/CardTodoScalarWhereWithAggregatesInputSchema'

export const CardTodoGroupByArgsSchema: z.ZodType<Prisma.CardTodoGroupByArgs> = z.object({
  where: CardTodoWhereInputSchema.optional(), 
  orderBy: z.union([ CardTodoOrderByWithAggregationInputSchema.array(), CardTodoOrderByWithAggregationInputSchema ]).optional(),
  by: CardTodoScalarFieldEnumSchema.array(), 
  having: CardTodoScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default CardTodoGroupByArgsSchema;
