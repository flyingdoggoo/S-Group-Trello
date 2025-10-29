import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectMemberIncludeSchema } from '../inputTypeSchemas/ProjectMemberIncludeSchema'
import { ProjectMemberUpdateInputSchema } from '../inputTypeSchemas/ProjectMemberUpdateInputSchema'
import { ProjectMemberUncheckedUpdateInputSchema } from '../inputTypeSchemas/ProjectMemberUncheckedUpdateInputSchema'
import { ProjectMemberWhereUniqueInputSchema } from '../inputTypeSchemas/ProjectMemberWhereUniqueInputSchema'
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

export const ProjectMemberUpdateArgsSchema: z.ZodType<Prisma.ProjectMemberUpdateArgs> = z.object({
  select: ProjectMemberSelectSchema.optional(),
  include: z.lazy(() => ProjectMemberIncludeSchema).optional(),
  data: z.union([ ProjectMemberUpdateInputSchema, ProjectMemberUncheckedUpdateInputSchema ]),
  where: ProjectMemberWhereUniqueInputSchema, 
}).strict();

export default ProjectMemberUpdateArgsSchema;
