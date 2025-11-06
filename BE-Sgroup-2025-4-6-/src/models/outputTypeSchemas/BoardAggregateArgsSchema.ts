import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BoardWhereInputSchema } from '../inputTypeSchemas/BoardWhereInputSchema'
import { BoardOrderByWithRelationInputSchema } from '../inputTypeSchemas/BoardOrderByWithRelationInputSchema'
import { BoardWhereUniqueInputSchema } from '../inputTypeSchemas/BoardWhereUniqueInputSchema'

export const BoardAggregateArgsSchema: z.ZodType<Prisma.BoardAggregateArgs> = z.object({
  where: BoardWhereInputSchema.optional(), 
  orderBy: z.union([ BoardOrderByWithRelationInputSchema.array(), BoardOrderByWithRelationInputSchema ]).optional(),
  cursor: BoardWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default BoardAggregateArgsSchema;
