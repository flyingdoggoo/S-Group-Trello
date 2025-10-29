import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectMemberCreateWithoutProjectInputSchema } from './ProjectMemberCreateWithoutProjectInputSchema';
import { ProjectMemberUncheckedCreateWithoutProjectInputSchema } from './ProjectMemberUncheckedCreateWithoutProjectInputSchema';
import { ProjectMemberCreateOrConnectWithoutProjectInputSchema } from './ProjectMemberCreateOrConnectWithoutProjectInputSchema';
import { ProjectMemberUpsertWithWhereUniqueWithoutProjectInputSchema } from './ProjectMemberUpsertWithWhereUniqueWithoutProjectInputSchema';
import { ProjectMemberCreateManyProjectInputEnvelopeSchema } from './ProjectMemberCreateManyProjectInputEnvelopeSchema';
import { ProjectMemberWhereUniqueInputSchema } from './ProjectMemberWhereUniqueInputSchema';
import { ProjectMemberUpdateWithWhereUniqueWithoutProjectInputSchema } from './ProjectMemberUpdateWithWhereUniqueWithoutProjectInputSchema';
import { ProjectMemberUpdateManyWithWhereWithoutProjectInputSchema } from './ProjectMemberUpdateManyWithWhereWithoutProjectInputSchema';
import { ProjectMemberScalarWhereInputSchema } from './ProjectMemberScalarWhereInputSchema';

export const ProjectMemberUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.ProjectMemberUpdateManyWithoutProjectNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ProjectMemberCreateWithoutProjectInputSchema), z.lazy(() => ProjectMemberCreateWithoutProjectInputSchema).array(), z.lazy(() => ProjectMemberUncheckedCreateWithoutProjectInputSchema), z.lazy(() => ProjectMemberUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProjectMemberCreateOrConnectWithoutProjectInputSchema), z.lazy(() => ProjectMemberCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProjectMemberUpsertWithWhereUniqueWithoutProjectInputSchema), z.lazy(() => ProjectMemberUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProjectMemberCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProjectMemberWhereUniqueInputSchema), z.lazy(() => ProjectMemberWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProjectMemberWhereUniqueInputSchema), z.lazy(() => ProjectMemberWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProjectMemberWhereUniqueInputSchema), z.lazy(() => ProjectMemberWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProjectMemberWhereUniqueInputSchema), z.lazy(() => ProjectMemberWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProjectMemberUpdateWithWhereUniqueWithoutProjectInputSchema), z.lazy(() => ProjectMemberUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProjectMemberUpdateManyWithWhereWithoutProjectInputSchema), z.lazy(() => ProjectMemberUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProjectMemberScalarWhereInputSchema), z.lazy(() => ProjectMemberScalarWhereInputSchema).array() ]).optional(),
});

export default ProjectMemberUpdateManyWithoutProjectNestedInputSchema;
