import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BoardMemberWhereInputSchema } from '../inputTypeSchemas/BoardMemberWhereInputSchema'
import { BoardMemberOrderByWithRelationInputSchema } from '../inputTypeSchemas/BoardMemberOrderByWithRelationInputSchema'
import { BoardMemberWhereUniqueInputSchema } from '../inputTypeSchemas/BoardMemberWhereUniqueInputSchema'

export const BoardMemberAggregateArgsSchema: z.ZodType<Prisma.BoardMemberAggregateArgs> = z.object({
  where: BoardMemberWhereInputSchema.optional(), 
  orderBy: z.union([ BoardMemberOrderByWithRelationInputSchema.array(), BoardMemberOrderByWithRelationInputSchema ]).optional(),
  cursor: BoardMemberWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default BoardMemberAggregateArgsSchema;
