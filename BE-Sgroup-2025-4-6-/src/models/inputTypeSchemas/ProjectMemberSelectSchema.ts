import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { projectArgsSchema } from "../outputTypeSchemas/projectArgsSchema"
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"
import { rolesArgsSchema } from "../outputTypeSchemas/rolesArgsSchema"

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

export default ProjectMemberSelectSchema;
