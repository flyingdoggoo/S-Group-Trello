import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BoardWhereInputSchema } from '../inputTypeSchemas/BoardWhereInputSchema'
import { BoardOrderByWithAggregationInputSchema } from '../inputTypeSchemas/BoardOrderByWithAggregationInputSchema'
import { BoardScalarFieldEnumSchema } from '../inputTypeSchemas/BoardScalarFieldEnumSchema'
import { BoardScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/BoardScalarWhereWithAggregatesInputSchema'

export const BoardGroupByArgsSchema: z.ZodType<Prisma.BoardGroupByArgs> = z.object({
  where: BoardWhereInputSchema.optional(), 
  orderBy: z.union([ BoardOrderByWithAggregationInputSchema.array(), BoardOrderByWithAggregationInputSchema ]).optional(),
  by: BoardScalarFieldEnumSchema.array(), 
  having: BoardScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default BoardGroupByArgsSchema;
