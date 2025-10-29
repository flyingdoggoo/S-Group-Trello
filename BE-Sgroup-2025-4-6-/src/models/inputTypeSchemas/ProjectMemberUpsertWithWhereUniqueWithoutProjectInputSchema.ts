import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectMemberWhereUniqueInputSchema } from './ProjectMemberWhereUniqueInputSchema';
import { ProjectMemberUpdateWithoutProjectInputSchema } from './ProjectMemberUpdateWithoutProjectInputSchema';
import { ProjectMemberUncheckedUpdateWithoutProjectInputSchema } from './ProjectMemberUncheckedUpdateWithoutProjectInputSchema';
import { ProjectMemberCreateWithoutProjectInputSchema } from './ProjectMemberCreateWithoutProjectInputSchema';
import { ProjectMemberUncheckedCreateWithoutProjectInputSchema } from './ProjectMemberUncheckedCreateWithoutProjectInputSchema';

export const ProjectMemberUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.ProjectMemberUpsertWithWhereUniqueWithoutProjectInput> = z.strictObject({
  where: z.lazy(() => ProjectMemberWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProjectMemberUpdateWithoutProjectInputSchema), z.lazy(() => ProjectMemberUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectMemberCreateWithoutProjectInputSchema), z.lazy(() => ProjectMemberUncheckedCreateWithoutProjectInputSchema) ]),
});

export default ProjectMemberUpsertWithWhereUniqueWithoutProjectInputSchema;
