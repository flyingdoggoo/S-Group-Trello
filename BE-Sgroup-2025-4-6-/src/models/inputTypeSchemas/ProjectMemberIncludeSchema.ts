import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { projectArgsSchema } from "../outputTypeSchemas/projectArgsSchema"
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"
import { rolesArgsSchema } from "../outputTypeSchemas/rolesArgsSchema"

export const ProjectMemberIncludeSchema: z.ZodType<Prisma.ProjectMemberInclude> = z.object({
  project: z.union([z.boolean(),z.lazy(() => projectArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
  role: z.union([z.boolean(),z.lazy(() => rolesArgsSchema)]).optional(),
}).strict();

export default ProjectMemberIncludeSchema;
