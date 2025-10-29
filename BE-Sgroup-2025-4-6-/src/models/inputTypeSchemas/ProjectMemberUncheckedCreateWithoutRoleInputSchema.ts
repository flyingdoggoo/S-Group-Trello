import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ProjectMemberUncheckedCreateWithoutRoleInputSchema: z.ZodType<Prisma.ProjectMemberUncheckedCreateWithoutRoleInput> = z.strictObject({
  id: z.uuid().optional(),
  projectId: z.string(),
  userId: z.string(),
  joinedAt: z.coerce.date().optional(),
});

export default ProjectMemberUncheckedCreateWithoutRoleInputSchema;
