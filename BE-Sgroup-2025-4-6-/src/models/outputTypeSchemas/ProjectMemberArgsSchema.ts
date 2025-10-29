import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectMemberSelectSchema } from '../inputTypeSchemas/ProjectMemberSelectSchema';
import { ProjectMemberIncludeSchema } from '../inputTypeSchemas/ProjectMemberIncludeSchema';

export const ProjectMemberArgsSchema: z.ZodType<Prisma.ProjectMemberDefaultArgs> = z.object({
  select: z.lazy(() => ProjectMemberSelectSchema).optional(),
  include: z.lazy(() => ProjectMemberIncludeSchema).optional(),
}).strict();

export default ProjectMemberArgsSchema;
