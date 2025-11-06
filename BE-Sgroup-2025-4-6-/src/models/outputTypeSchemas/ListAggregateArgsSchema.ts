import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ListWhereInputSchema } from '../inputTypeSchemas/ListWhereInputSchema'
import { ListOrderByWithRelationInputSchema } from '../inputTypeSchemas/ListOrderByWithRelationInputSchema'
import { ListWhereUniqueInputSchema } from '../inputTypeSchemas/ListWhereUniqueInputSchema'

export const ListAggregateArgsSchema: z.ZodType<Prisma.ListAggregateArgs> = z.object({
  where: ListWhereInputSchema.optional(), 
  orderBy: z.union([ ListOrderByWithRelationInputSchema.array(), ListOrderByWithRelationInputSchema ]).optional(),
  cursor: ListWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default ListAggregateArgsSchema;
