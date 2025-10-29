import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectMemberIncludeSchema } from '../inputTypeSchemas/ProjectMemberIncludeSchema'
import { ProjectMemberWhereInputSchema } from '../inputTypeSchemas/ProjectMemberWhereInputSchema'
import { ProjectMemberOrderByWithRelationInputSchema } from '../inputTypeSchemas/ProjectMemberOrderByWithRelationInputSchema'
import { ProjectMemberWhereUniqueInputSchema } from '../inputTypeSchemas/ProjectMemberWhereUniqueInputSchema'
import { ProjectMemberScalarFieldEnumSchema } from '../inputTypeSchemas/ProjectMemberScalarFieldEnumSchema'
import { projectArgsSchema } from "../outputTypeSchemas/projectArgsSchema"
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"
import { rolesArgsSchema } from "../outputTypeSchemas/rolesArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const ProjectMemberSelectSchema: z.ZodType<Prisma.ProjectMemberSelect> = z.object({
  id: z.boolean().optional(),
  projectId: z.boolean().optional(),
  userId: z.boolean().optional(),
  roleId: z.boolean().optional(),
  joinedAt: z.boolean().optional(),
  project: z.union([z.boolean(),z.lazy(() => projectArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
  role: z.union([z.boolean(),z.lazy(() => rolesArgsSchema)]).optional(),
}).strict()

export const ProjectMemberFindManyArgsSchema: z.ZodType<Prisma.ProjectMemberFindManyArgs> = z.object({
  select: ProjectMemberSelectSchema.optional(),
  include: z.lazy(() => ProjectMemberIncludeSchema).optional(),
  where: ProjectMemberWhereInputSchema.optional(), 
  orderBy: z.union([ ProjectMemberOrderByWithRelationInputSchema.array(), ProjectMemberOrderByWithRelationInputSchema ]).optional(),
  cursor: ProjectMemberWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ProjectMemberScalarFieldEnumSchema, ProjectMemberScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default ProjectMemberFindManyArgsSchema;
