import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BoardMemberWhereInputSchema } from '../inputTypeSchemas/BoardMemberWhereInputSchema'
import { BoardMemberOrderByWithAggregationInputSchema } from '../inputTypeSchemas/BoardMemberOrderByWithAggregationInputSchema'
import { BoardMemberScalarFieldEnumSchema } from '../inputTypeSchemas/BoardMemberScalarFieldEnumSchema'
import { BoardMemberScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/BoardMemberScalarWhereWithAggregatesInputSchema'

export const BoardMemberGroupByArgsSchema: z.ZodType<Prisma.BoardMemberGroupByArgs> = z.object({
  where: BoardMemberWhereInputSchema.optional(), 
  orderBy: z.union([ BoardMemberOrderByWithAggregationInputSchema.array(), BoardMemberOrderByWithAggregationInputSchema ]).optional(),
  by: BoardMemberScalarFieldEnumSchema.array(), 
  having: BoardMemberScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default BoardMemberGroupByArgsSchema;
