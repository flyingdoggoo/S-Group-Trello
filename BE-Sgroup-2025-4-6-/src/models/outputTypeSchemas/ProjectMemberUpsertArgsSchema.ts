import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectMemberIncludeSchema } from '../inputTypeSchemas/ProjectMemberIncludeSchema'
import { ProjectMemberWhereUniqueInputSchema } from '../inputTypeSchemas/ProjectMemberWhereUniqueInputSchema'
import { ProjectMemberCreateInputSchema } from '../inputTypeSchemas/ProjectMemberCreateInputSchema'
import { ProjectMemberUncheckedCreateInputSchema } from '../inputTypeSchemas/ProjectMemberUncheckedCreateInputSchema'
import { ProjectMemberUpdateInputSchema } from '../inputTypeSchemas/ProjectMemberUpdateInputSchema'
import { ProjectMemberUncheckedUpdateInputSchema } from '../inputTypeSchemas/ProjectMemberUncheckedUpdateInputSchema'
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

export const ProjectMemberUpsertArgsSchema: z.ZodType<Prisma.ProjectMemberUpsertArgs> = z.object({
  select: ProjectMemberSelectSchema.optional(),
  include: z.lazy(() => ProjectMemberIncludeSchema).optional(),
  where: ProjectMemberWhereUniqueInputSchema, 
  create: z.union([ ProjectMemberCreateInputSchema, ProjectMemberUncheckedCreateInputSchema ]),
  update: z.union([ ProjectMemberUpdateInputSchema, ProjectMemberUncheckedUpdateInputSchema ]),
}).strict();

export default ProjectMemberUpsertArgsSchema;
