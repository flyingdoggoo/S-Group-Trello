import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectMemberScalarWhereInputSchema } from './ProjectMemberScalarWhereInputSchema';
import { ProjectMemberUpdateManyMutationInputSchema } from './ProjectMemberUpdateManyMutationInputSchema';
import { ProjectMemberUncheckedUpdateManyWithoutRoleInputSchema } from './ProjectMemberUncheckedUpdateManyWithoutRoleInputSchema';

export const ProjectMemberUpdateManyWithWhereWithoutRoleInputSchema: z.ZodType<Prisma.ProjectMemberUpdateManyWithWhereWithoutRoleInput> = z.strictObject({
  where: z.lazy(() => ProjectMemberScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProjectMemberUpdateManyMutationInputSchema), z.lazy(() => ProjectMemberUncheckedUpdateManyWithoutRoleInputSchema) ]),
});

export default ProjectMemberUpdateManyWithWhereWithoutRoleInputSchema;
