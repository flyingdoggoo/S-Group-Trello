import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectMemberWhereUniqueInputSchema } from './ProjectMemberWhereUniqueInputSchema';
import { ProjectMemberCreateWithoutUserInputSchema } from './ProjectMemberCreateWithoutUserInputSchema';
import { ProjectMemberUncheckedCreateWithoutUserInputSchema } from './ProjectMemberUncheckedCreateWithoutUserInputSchema';

export const ProjectMemberCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.ProjectMemberCreateOrConnectWithoutUserInput> = z.strictObject({
  where: z.lazy(() => ProjectMemberWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectMemberCreateWithoutUserInputSchema), z.lazy(() => ProjectMemberUncheckedCreateWithoutUserInputSchema) ]),
});

export default ProjectMemberCreateOrConnectWithoutUserInputSchema;
