import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ProjectMemberCreateManyProjectInputSchema: z.ZodType<Prisma.ProjectMemberCreateManyProjectInput> = z.strictObject({
  id: z.uuid().optional(),
  userId: z.string(),
  roleId: z.string(),
  joinedAt: z.coerce.date().optional(),
});

export default ProjectMemberCreateManyProjectInputSchema;
