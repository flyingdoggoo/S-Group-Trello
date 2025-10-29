import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { projectWhereInputSchema } from '../inputTypeSchemas/projectWhereInputSchema'
import { projectOrderByWithRelationInputSchema } from '../inputTypeSchemas/projectOrderByWithRelationInputSchema'
import { projectWhereUniqueInputSchema } from '../inputTypeSchemas/projectWhereUniqueInputSchema'

export const projectAggregateArgsSchema: z.ZodType<Prisma.projectAggregateArgs> = z.object({
  where: projectWhereInputSchema.optional(), 
  orderBy: z.union([ projectOrderByWithRelationInputSchema.array(), projectOrderByWithRelationInputSchema ]).optional(),
  cursor: projectWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default projectAggregateArgsSchema;
