import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectMemberCreateWithoutProjectInputSchema } from './ProjectMemberCreateWithoutProjectInputSchema';
import { ProjectMemberUncheckedCreateWithoutProjectInputSchema } from './ProjectMemberUncheckedCreateWithoutProjectInputSchema';
import { ProjectMemberCreateOrConnectWithoutProjectInputSchema } from './ProjectMemberCreateOrConnectWithoutProjectInputSchema';
import { ProjectMemberCreateManyProjectInputEnvelopeSchema } from './ProjectMemberCreateManyProjectInputEnvelopeSchema';
import { ProjectMemberWhereUniqueInputSchema } from './ProjectMemberWhereUniqueInputSchema';

export const ProjectMemberUncheckedCreateNestedManyWithoutProjectInputSchema: z.ZodType<Prisma.ProjectMemberUncheckedCreateNestedManyWithoutProjectInput> = z.strictObject({
  create: z.union([ z.lazy(() => ProjectMemberCreateWithoutProjectInputSchema), z.lazy(() => ProjectMemberCreateWithoutProjectInputSchema).array(), z.lazy(() => ProjectMemberUncheckedCreateWithoutProjectInputSchema), z.lazy(() => ProjectMemberUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProjectMemberCreateOrConnectWithoutProjectInputSchema), z.lazy(() => ProjectMemberCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProjectMemberCreateManyProjectInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ProjectMemberWhereUniqueInputSchema), z.lazy(() => ProjectMemberWhereUniqueInputSchema).array() ]).optional(),
});

export default ProjectMemberUncheckedCreateNestedManyWithoutProjectInputSchema;
