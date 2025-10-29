import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectMemberWhereUniqueInputSchema } from './ProjectMemberWhereUniqueInputSchema';
import { ProjectMemberCreateWithoutProjectInputSchema } from './ProjectMemberCreateWithoutProjectInputSchema';
import { ProjectMemberUncheckedCreateWithoutProjectInputSchema } from './ProjectMemberUncheckedCreateWithoutProjectInputSchema';

export const ProjectMemberCreateOrConnectWithoutProjectInputSchema: z.ZodType<Prisma.ProjectMemberCreateOrConnectWithoutProjectInput> = z.strictObject({
  where: z.lazy(() => ProjectMemberWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectMemberCreateWithoutProjectInputSchema), z.lazy(() => ProjectMemberUncheckedCreateWithoutProjectInputSchema) ]),
});

export default ProjectMemberCreateOrConnectWithoutProjectInputSchema;
