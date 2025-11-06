import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ListWhereInputSchema } from '../inputTypeSchemas/ListWhereInputSchema'
import { ListOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ListOrderByWithAggregationInputSchema'
import { ListScalarFieldEnumSchema } from '../inputTypeSchemas/ListScalarFieldEnumSchema'
import { ListScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ListScalarWhereWithAggregatesInputSchema'

export const ListGroupByArgsSchema: z.ZodType<Prisma.ListGroupByArgs> = z.object({
  where: ListWhereInputSchema.optional(), 
  orderBy: z.union([ ListOrderByWithAggregationInputSchema.array(), ListOrderByWithAggregationInputSchema ]).optional(),
  by: ListScalarFieldEnumSchema.array(), 
  having: ListScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default ListGroupByArgsSchema;
