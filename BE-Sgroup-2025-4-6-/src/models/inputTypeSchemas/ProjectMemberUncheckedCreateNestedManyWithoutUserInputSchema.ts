import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectMemberCreateWithoutUserInputSchema } from './ProjectMemberCreateWithoutUserInputSchema';
import { ProjectMemberUncheckedCreateWithoutUserInputSchema } from './ProjectMemberUncheckedCreateWithoutUserInputSchema';
import { ProjectMemberCreateOrConnectWithoutUserInputSchema } from './ProjectMemberCreateOrConnectWithoutUserInputSchema';
import { ProjectMemberCreateManyUserInputEnvelopeSchema } from './ProjectMemberCreateManyUserInputEnvelopeSchema';
import { ProjectMemberWhereUniqueInputSchema } from './ProjectMemberWhereUniqueInputSchema';

export const ProjectMemberUncheckedCreateNestedManyWithoutUserInputSchema: z.ZodType<Prisma.ProjectMemberUncheckedCreateNestedManyWithoutUserInput> = z.strictObject({
  create: z.union([ z.lazy(() => ProjectMemberCreateWithoutUserInputSchema), z.lazy(() => ProjectMemberCreateWithoutUserInputSchema).array(), z.lazy(() => ProjectMemberUncheckedCreateWithoutUserInputSchema), z.lazy(() => ProjectMemberUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProjectMemberCreateOrConnectWithoutUserInputSchema), z.lazy(() => ProjectMemberCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProjectMemberCreateManyUserInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProjectMemberWhereUniqueInputSchema), z.lazy(() => ProjectMemberWhereUniqueInputSchema).array() ]).optional(),
});

export default ProjectMemberUncheckedCreateNestedManyWithoutUserInputSchema;
