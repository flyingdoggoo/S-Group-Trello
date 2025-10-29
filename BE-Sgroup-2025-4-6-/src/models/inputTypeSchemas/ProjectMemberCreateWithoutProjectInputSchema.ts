import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateNestedOneWithoutProjectMembersInputSchema } from './usersCreateNestedOneWithoutProjectMembersInputSchema';
import { rolesCreateNestedOneWithoutProjectMembersInputSchema } from './rolesCreateNestedOneWithoutProjectMembersInputSchema';

export const ProjectMemberCreateWithoutProjectInputSchema: z.ZodType<Prisma.ProjectMemberCreateWithoutProjectInput> = z.strictObject({
  id: z.uuid().optional(),
  joinedAt: z.coerce.date().optional(),
  user: z.lazy(() => usersCreateNestedOneWithoutProjectMembersInputSchema),
  role: z.lazy(() => rolesCreateNestedOneWithoutProjectMembersInputSchema),
});

export default ProjectMemberCreateWithoutProjectInputSchema;
