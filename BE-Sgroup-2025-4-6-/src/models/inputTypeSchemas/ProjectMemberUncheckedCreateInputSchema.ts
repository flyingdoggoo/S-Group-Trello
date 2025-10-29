import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ProjectMemberUncheckedCreateInputSchema: z.ZodType<Prisma.ProjectMemberUncheckedCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  projectId: z.string(),
  userId: z.string(),
  roleId: z.string(),
  joinedAt: z.coerce.date().optional(),
});

export default ProjectMemberUncheckedCreateInputSchema;
