import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectMemberWhereUniqueInputSchema } from './ProjectMemberWhereUniqueInputSchema';
import { ProjectMemberUpdateWithoutUserInputSchema } from './ProjectMemberUpdateWithoutUserInputSchema';
import { ProjectMemberUncheckedUpdateWithoutUserInputSchema } from './ProjectMemberUncheckedUpdateWithoutUserInputSchema';
import { ProjectMemberCreateWithoutUserInputSchema } from './ProjectMemberCreateWithoutUserInputSchema';
import { ProjectMemberUncheckedCreateWithoutUserInputSchema } from './ProjectMemberUncheckedCreateWithoutUserInputSchema';

export const ProjectMemberUpsertWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.ProjectMemberUpsertWithWhereUniqueWithoutUserInput> = z.strictObject({
  where: z.lazy(() => ProjectMemberWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ProjectMemberUpdateWithoutUserInputSchema), z.lazy(() => ProjectMemberUncheckedUpdateWithoutUserInputSchema) ]),
  create: z.union([ z.lazy(() => ProjectMemberCreateWithoutUserInputSchema), z.lazy(() => ProjectMemberUncheckedCreateWithoutUserInputSchema) ]),
});

export default ProjectMemberUpsertWithWhereUniqueWithoutUserInputSchema;
