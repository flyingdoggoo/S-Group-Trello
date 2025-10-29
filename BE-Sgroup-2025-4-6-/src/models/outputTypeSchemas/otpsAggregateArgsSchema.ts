import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { otpsWhereInputSchema } from '../inputTypeSchemas/otpsWhereInputSchema'
import { otpsOrderByWithRelationInputSchema } from '../inputTypeSchemas/otpsOrderByWithRelationInputSchema'
import { otpsWhereUniqueInputSchema } from '../inputTypeSchemas/otpsWhereUniqueInputSchema'

export const otpsAggregateArgsSchema: z.ZodType<Prisma.otpsAggregateArgs> = z.object({
  where: otpsWhereInputSchema.optional(), 
  orderBy: z.union([ otpsOrderByWithRelationInputSchema.array(), otpsOrderByWithRelationInputSchema ]).optional(),
  cursor: otpsWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default otpsAggregateArgsSchema;
