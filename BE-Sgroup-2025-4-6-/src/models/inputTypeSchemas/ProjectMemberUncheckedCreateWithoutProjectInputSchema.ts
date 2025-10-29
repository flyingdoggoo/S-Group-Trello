import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ProjectMemberUncheckedCreateWithoutProjectInputSchema: z.ZodType<Prisma.ProjectMemberUncheckedCreateWithoutProjectInput> = z.strictObject({
  id: z.uuid().optional(),
  userId: z.string(),
  roleId: z.string(),
  joinedAt: z.coerce.date().optional(),
});

export default ProjectMemberUncheckedCreateWithoutProjectInputSchema;
