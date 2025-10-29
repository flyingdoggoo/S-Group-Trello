import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const ProjectMemberCreateManyUserInputSchema: z.ZodType<Prisma.ProjectMemberCreateManyUserInput> = z.strictObject({
  id: z.uuid().optional(),
  projectId: z.string(),
  roleId: z.string(),
  joinedAt: z.coerce.date().optional(),
});

export default ProjectMemberCreateManyUserInputSchema;
