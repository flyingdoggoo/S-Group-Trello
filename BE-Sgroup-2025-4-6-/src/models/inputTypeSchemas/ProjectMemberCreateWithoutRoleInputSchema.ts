import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { projectCreateNestedOneWithoutMembersInputSchema } from './projectCreateNestedOneWithoutMembersInputSchema';
import { usersCreateNestedOneWithoutProjectMembersInputSchema } from './usersCreateNestedOneWithoutProjectMembersInputSchema';

export const ProjectMemberCreateWithoutRoleInputSchema: z.ZodType<Prisma.ProjectMemberCreateWithoutRoleInput> = z.strictObject({
  id: z.uuid().optional(),
  joinedAt: z.coerce.date().optional(),
  project: z.lazy(() => projectCreateNestedOneWithoutMembersInputSchema),
  user: z.lazy(() => usersCreateNestedOneWithoutProjectMembersInputSchema),
});

export default ProjectMemberCreateWithoutRoleInputSchema;
