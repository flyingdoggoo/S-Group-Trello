import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectMemberScalarWhereInputSchema } from './ProjectMemberScalarWhereInputSchema';
import { ProjectMemberUpdateManyMutationInputSchema } from './ProjectMemberUpdateManyMutationInputSchema';
import { ProjectMemberUncheckedUpdateManyWithoutProjectInputSchema } from './ProjectMemberUncheckedUpdateManyWithoutProjectInputSchema';

export const ProjectMemberUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.ProjectMemberUpdateManyWithWhereWithoutProjectInput> = z.strictObject({
  where: z.lazy(() => ProjectMemberScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProjectMemberUpdateManyMutationInputSchema), z.lazy(() => ProjectMemberUncheckedUpdateManyWithoutProjectInputSchema) ]),
});

export default ProjectMemberUpdateManyWithWhereWithoutProjectInputSchema;
