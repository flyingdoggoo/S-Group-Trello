import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ProjectMemberCreateManyRoleInputSchema: z.ZodType<Prisma.ProjectMemberCreateManyRoleInput> = z.strictObject({
  id: z.uuid().optional(),
  projectId: z.string(),
  userId: z.string(),
  joinedAt: z.coerce.date().optional(),
});

export default ProjectMemberCreateManyRoleInputSchema;
