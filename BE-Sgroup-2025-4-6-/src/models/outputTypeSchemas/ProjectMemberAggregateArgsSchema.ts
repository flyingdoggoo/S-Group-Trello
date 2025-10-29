import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectMemberWhereInputSchema } from '../inputTypeSchemas/ProjectMemberWhereInputSchema'
import { ProjectMemberOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProjectMemberOrderByWithRelationInputSchema'
import { ProjectMemberWhereUniqueInputSchema } from '../inputTypeSchemas/ProjectMemberWhereUniqueInputSchema'

export const ProjectMemberAggregateArgsSchema: z.ZodType<Prisma.ProjectMemberAggregateArgs> = z.object({
  where: ProjectMemberWhereInputSchema.optional(), 
  orderBy: z.union([ ProjectMemberOrderByWithRelationInputSchema.array(), ProjectMemberOrderByWithRelationInputSchema ]).optional(),
  cursor: ProjectMemberWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default ProjectMemberAggregateArgsSchema;
