import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectMemberWhereUniqueInputSchema } from './ProjectMemberWhereUniqueInputSchema';
import { ProjectMemberCreateWithoutRoleInputSchema } from './ProjectMemberCreateWithoutRoleInputSchema';
import { ProjectMemberUncheckedCreateWithoutRoleInputSchema } from './ProjectMemberUncheckedCreateWithoutRoleInputSchema';

export const ProjectMemberCreateOrConnectWithoutRoleInputSchema: z.ZodType<Prisma.ProjectMemberCreateOrConnectWithoutRoleInput> = z.strictObject({
  where: z.lazy(() => ProjectMemberWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ProjectMemberCreateWithoutRoleInputSchema), z.lazy(() => ProjectMemberUncheckedCreateWithoutRoleInputSchema) ]),
});

export default ProjectMemberCreateOrConnectWithoutRoleInputSchema;
