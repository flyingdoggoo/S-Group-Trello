import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ProjectMemberUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.ProjectMemberUncheckedCreateWithoutUserInput> = z.strictObject({
  id: z.uuid().optional(),
  projectId: z.string(),
  roleId: z.string(),
  joinedAt: z.coerce.date().optional(),
});

export default ProjectMemberUncheckedCreateWithoutUserInputSchema;
