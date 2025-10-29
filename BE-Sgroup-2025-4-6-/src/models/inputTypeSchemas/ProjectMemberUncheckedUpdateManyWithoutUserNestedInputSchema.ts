import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectMemberCreateWithoutUserInputSchema } from './ProjectMemberCreateWithoutUserInputSchema';
import { ProjectMemberUncheckedCreateWithoutUserInputSchema } from './ProjectMemberUncheckedCreateWithoutUserInputSchema';
import { ProjectMemberCreateOrConnectWithoutUserInputSchema } from './ProjectMemberCreateOrConnectWithoutUserInputSchema';
import { ProjectMemberUpsertWithWhereUniqueWithoutUserInputSchema } from './ProjectMemberUpsertWithWhereUniqueWithoutUserInputSchema';
import { ProjectMemberCreateManyUserInputEnvelopeSchema } from './ProjectMemberCreateManyUserInputEnvelopeSchema';
import { ProjectMemberWhereUniqueInputSchema } from './ProjectMemberWhereUniqueInputSchema';
import { ProjectMemberUpdateWithWhereUniqueWithoutUserInputSchema } from './ProjectMemberUpdateWithWhereUniqueWithoutUserInputSchema';
import { ProjectMemberUpdateManyWithWhereWithoutUserInputSchema } from './ProjectMemberUpdateManyWithWhereWithoutUserInputSchema';
import { ProjectMemberScalarWhereInputSchema } from './ProjectMemberScalarWhereInputSchema';

export const ProjectMemberUncheckedUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.ProjectMemberUncheckedUpdateManyWithoutUserNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ProjectMemberCreateWithoutUserInputSchema), z.lazy(() => ProjectMemberCreateWithoutUserInputSchema).array(), z.lazy(() => ProjectMemberUncheckedCreateWithoutUserInputSchema), z.lazy(() => ProjectMemberUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProjectMemberCreateOrConnectWithoutUserInputSchema), z.lazy(() => ProjectMemberCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProjectMemberUpsertWithWhereUniqueWithoutUserInputSchema), z.lazy(() => ProjectMemberUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProjectMemberCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProjectMemberWhereUniqueInputSchema), z.lazy(() => ProjectMemberWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProjectMemberWhereUniqueInputSchema), z.lazy(() => ProjectMemberWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProjectMemberWhereUniqueInputSchema), z.lazy(() => ProjectMemberWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProjectMemberWhereUniqueInputSchema), z.lazy(() => ProjectMemberWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProjectMemberUpdateWithWhereUniqueWithoutUserInputSchema), z.lazy(() => ProjectMemberUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProjectMemberUpdateManyWithWhereWithoutUserInputSchema), z.lazy(() => ProjectMemberUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProjectMemberScalarWhereInputSchema), z.lazy(() => ProjectMemberScalarWhereInputSchema).array() ]).optional(),
});

export default ProjectMemberUncheckedUpdateManyWithoutUserNestedInputSchema;
