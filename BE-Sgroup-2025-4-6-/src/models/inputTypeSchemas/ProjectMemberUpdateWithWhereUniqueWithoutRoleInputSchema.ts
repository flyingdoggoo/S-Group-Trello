import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectMemberWhereUniqueInputSchema } from './ProjectMemberWhereUniqueInputSchema';
import { ProjectMemberUpdateWithoutRoleInputSchema } from './ProjectMemberUpdateWithoutRoleInputSchema';
import { ProjectMemberUncheckedUpdateWithoutRoleInputSchema } from './ProjectMemberUncheckedUpdateWithoutRoleInputSchema';

export const ProjectMemberUpdateWithWhereUniqueWithoutRoleInputSchema: z.ZodType<Prisma.ProjectMemberUpdateWithWhereUniqueWithoutRoleInput> = z.strictObject({
  where: z.lazy(() => ProjectMemberWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ProjectMemberUpdateWithoutRoleInputSchema), z.lazy(() => ProjectMemberUncheckedUpdateWithoutRoleInputSchema) ]),
});

export default ProjectMemberUpdateWithWhereUniqueWithoutRoleInputSchema;
