import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectMemberWhereUniqueInputSchema } from './ProjectMemberWhereUniqueInputSchema';
import { ProjectMemberUpdateWithoutRoleInputSchema } from './ProjectMemberUpdateWithoutRoleInputSchema';
import { ProjectMemberUncheckedUpdateWithoutRoleInputSchema } from './ProjectMemberUncheckedUpdateWithoutRoleInputSchema';
import { ProjectMemberCreateWithoutRoleInputSchema } from './ProjectMemberCreateWithoutRoleInputSchema';
import { ProjectMemberUncheckedCreateWithoutRoleInputSchema } from './ProjectMemberUncheckedCreateWithoutRoleInputSchema';

export const ProjectMemberUpsertWithWhereUniqueWithoutRoleInputSchema: z.ZodType<Prisma.ProjectMemberUpsertWithWhereUniqueWithoutRoleInput> = z.strictObject({
  where: z.lazy(() => ProjectMemberWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProjectMemberUpdateWithoutRoleInputSchema), z.lazy(() => ProjectMemberUncheckedUpdateWithoutRoleInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectMemberCreateWithoutRoleInputSchema), z.lazy(() => ProjectMemberUncheckedCreateWithoutRoleInputSchema) ]),
});

export default ProjectMemberUpsertWithWhereUniqueWithoutRoleInputSchema;
