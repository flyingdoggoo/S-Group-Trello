import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { projectCreateNestedOneWithoutMembersInputSchema } from './projectCreateNestedOneWithoutMembersInputSchema';
import { usersCreateNestedOneWithoutProjectMembersInputSchema } from './usersCreateNestedOneWithoutProjectMembersInputSchema';
import { rolesCreateNestedOneWithoutProjectMembersInputSchema } from './rolesCreateNestedOneWithoutProjectMembersInputSchema';

export const ProjectMemberCreateInputSchema: z.ZodType<Prisma.ProjectMemberCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  joinedAt: z.coerce.date().optional(),
  project: z.lazy(() => projectCreateNestedOneWithoutMembersInputSchema),
  user: z.lazy(() => usersCreateNestedOneWithoutProjectMembersInputSchema),
  role: z.lazy(() => rolesCreateNestedOneWithoutProjectMembersInputSchema),
});

export default ProjectMemberCreateInputSchema;
