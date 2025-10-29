import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { projectCreateNestedOneWithoutMembersInputSchema } from './projectCreateNestedOneWithoutMembersInputSchema';
import { rolesCreateNestedOneWithoutProjectMembersInputSchema } from './rolesCreateNestedOneWithoutProjectMembersInputSchema';

export const ProjectMemberCreateWithoutUserInputSchema: z.ZodType<Prisma.ProjectMemberCreateWithoutUserInput> = z.strictObject({
  id: z.uuid().optional(),
  joinedAt: z.coerce.date().optional(),
  project: z.lazy(() => projectCreateNestedOneWithoutMembersInputSchema),
  role: z.lazy(() => rolesCreateNestedOneWithoutProjectMembersInputSchema),
});

export default ProjectMemberCreateWithoutUserInputSchema;
