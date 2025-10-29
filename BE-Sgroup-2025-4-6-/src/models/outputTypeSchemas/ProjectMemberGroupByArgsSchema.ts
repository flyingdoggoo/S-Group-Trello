import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectMemberWhereInputSchema } from '../inputTypeSchemas/ProjectMemberWhereInputSchema'
import { ProjectMemberOrderByWithAggregationInputSchema } from '../inputTypeSchemas/ProjectMemberOrderByWithAggregationInputSchema'
import { ProjectMemberScalarFieldEnumSchema } from '../inputTypeSchemas/ProjectMemberScalarFieldEnumSchema'
import { ProjectMemberScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/ProjectMemberScalarWhereWithAggregatesInputSchema'

export const ProjectMemberGroupByArgsSchema: z.ZodType<Prisma.ProjectMemberGroupByArgs> = z.object({
  where: ProjectMemberWhereInputSchema.optional(), 
  orderBy: z.union([ ProjectMemberOrderByWithAggregationInputSchema.array(), ProjectMemberOrderByWithAggregationInputSchema ]).optional(),
  by: ProjectMemberScalarFieldEnumSchema.array(), 
  having: ProjectMemberScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default ProjectMemberGroupByArgsSchema;
