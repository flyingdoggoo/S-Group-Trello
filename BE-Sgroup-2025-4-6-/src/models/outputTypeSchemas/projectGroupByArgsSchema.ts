import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { projectWhereInputSchema } from '../inputTypeSchemas/projectWhereInputSchema'
import { projectOrderByWithAggregationInputSchema } from '../inputTypeSchemas/projectOrderByWithAggregationInputSchema'
import { ProjectScalarFieldEnumSchema } from '../inputTypeSchemas/ProjectScalarFieldEnumSchema'
import { projectScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/projectScalarWhereWithAggregatesInputSchema'

export const projectGroupByArgsSchema: z.ZodType<Prisma.projectGroupByArgs> = z.object({
  where: projectWhereInputSchema.optional(), 
  orderBy: z.union([ projectOrderByWithAggregationInputSchema.array(), projectOrderByWithAggregationInputSchema ]).optional(),
  by: ProjectScalarFieldEnumSchema.array(), 
  having: projectScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default projectGroupByArgsSchema;
