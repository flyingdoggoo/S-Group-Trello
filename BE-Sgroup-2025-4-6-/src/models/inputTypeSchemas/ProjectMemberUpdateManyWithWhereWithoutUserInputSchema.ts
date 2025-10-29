import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectMemberScalarWhereInputSchema } from './ProjectMemberScalarWhereInputSchema';
import { ProjectMemberUpdateManyMutationInputSchema } from './ProjectMemberUpdateManyMutationInputSchema';
import { ProjectMemberUncheckedUpdateManyWithoutUserInputSchema } from './ProjectMemberUncheckedUpdateManyWithoutUserInputSchema';

export const ProjectMemberUpdateManyWithWhereWithoutUserInputSchema: z.ZodType<Prisma.ProjectMemberUpdateManyWithWhereWithoutUserInput> = z.strictObject({
  where: z.lazy(() => ProjectMemberScalarWhereInputSchema),
  data: z.union([ z.lazy(() => ProjectMemberUpdateManyMutationInputSchema), z.lazy(() => ProjectMemberUncheckedUpdateManyWithoutUserInputSchema) ]),
});

export default ProjectMemberUpdateManyWithWhereWithoutUserInputSchema;
