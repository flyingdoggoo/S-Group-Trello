import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardTodoWhereInputSchema } from '../inputTypeSchemas/CardTodoWhereInputSchema'
import { CardTodoOrderByWithRelationInputSchema } from '../inputTypeSchemas/CardTodoOrderByWithRelationInputSchema'
import { CardTodoWhereUniqueInputSchema } from '../inputTypeSchemas/CardTodoWhereUniqueInputSchema'

export const CardTodoAggregateArgsSchema: z.ZodType<Prisma.CardTodoAggregateArgs> = z.object({
  where: CardTodoWhereInputSchema.optional(), 
  orderBy: z.union([ CardTodoOrderByWithRelationInputSchema.array(), CardTodoOrderByWithRelationInputSchema ]).optional(),
  cursor: CardTodoWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default CardTodoAggregateArgsSchema;
