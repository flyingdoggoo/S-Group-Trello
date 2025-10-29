import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectMemberWhereUniqueInputSchema } from './ProjectMemberWhereUniqueInputSchema';
import { ProjectMemberUpdateWithoutProjectInputSchema } from './ProjectMemberUpdateWithoutProjectInputSchema';
import { ProjectMemberUncheckedUpdateWithoutProjectInputSchema } from './ProjectMemberUncheckedUpdateWithoutProjectInputSchema';

export const ProjectMemberUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.ProjectMemberUpdateWithWhereUniqueWithoutProjectInput> = z.strictObject({
  where: z.lazy(() => ProjectMemberWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProjectMemberUpdateWithoutProjectInputSchema), z.lazy(() => ProjectMemberUncheckedUpdateWithoutProjectInputSchema) ]),
});

export default ProjectMemberUpdateWithWhereUniqueWithoutProjectInputSchema;
