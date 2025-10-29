import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ProjectMemberCreateManyInputSchema: z.ZodType<Prisma.ProjectMemberCreateManyInput> = z.strictObject({
  id: z.uuid().optional(),
  projectId: z.string(),
  userId: z.string(),
  roleId: z.string(),
  joinedAt: z.coerce.date().optional(),
});

export default ProjectMemberCreateManyInputSchema;
