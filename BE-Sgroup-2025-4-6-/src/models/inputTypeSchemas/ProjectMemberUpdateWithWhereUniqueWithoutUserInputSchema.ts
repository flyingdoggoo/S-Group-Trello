import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectMemberWhereUniqueInputSchema } from './ProjectMemberWhereUniqueInputSchema';
import { ProjectMemberUpdateWithoutUserInputSchema } from './ProjectMemberUpdateWithoutUserInputSchema';
import { ProjectMemberUncheckedUpdateWithoutUserInputSchema } from './ProjectMemberUncheckedUpdateWithoutUserInputSchema';

export const ProjectMemberUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ProjectMemberUpdateWithWhereUniqueWithoutUserInput> = z.strictObject({
  where: z.lazy(() => ProjectMemberWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProjectMemberUpdateWithoutUserInputSchema), z.lazy(() => ProjectMemberUncheckedUpdateWithoutUserInputSchema) ]),
});

export default ProjectMemberUpdateWithWhereUniqueWithoutUserInputSchema;
