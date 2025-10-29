import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectMemberCreateWithoutRoleInputSchema } from './ProjectMemberCreateWithoutRoleInputSchema';
import { ProjectMemberUncheckedCreateWithoutRoleInputSchema } from './ProjectMemberUncheckedCreateWithoutRoleInputSchema';
import { ProjectMemberCreateOrConnectWithoutRoleInputSchema } from './ProjectMemberCreateOrConnectWithoutRoleInputSchema';
import { ProjectMemberUpsertWithWhereUniqueWithoutRoleInputSchema } from './ProjectMemberUpsertWithWhereUniqueWithoutRoleInputSchema';
import { ProjectMemberCreateManyRoleInputEnvelopeSchema } from './ProjectMemberCreateManyRoleInputEnvelopeSchema';
import { ProjectMemberWhereUniqueInputSchema } from './ProjectMemberWhereUniqueInputSchema';
import { ProjectMemberUpdateWithWhereUniqueWithoutRoleInputSchema } from './ProjectMemberUpdateWithWhereUniqueWithoutRoleInputSchema';
import { ProjectMemberUpdateManyWithWhereWithoutRoleInputSchema } from './ProjectMemberUpdateManyWithWhereWithoutRoleInputSchema';
import { ProjectMemberScalarWhereInputSchema } from './ProjectMemberScalarWhereInputSchema';

export const ProjectMemberUncheckedUpdateManyWithoutRoleNestedInputSchema: z.ZodType<Prisma.ProjectMemberUncheckedUpdateManyWithoutRoleNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ProjectMemberCreateWithoutRoleInputSchema), z.lazy(() => ProjectMemberCreateWithoutRoleInputSchema).array(), z.lazy(() => ProjectMemberUncheckedCreateWithoutRoleInputSchema), z.lazy(() => ProjectMemberUncheckedCreateWithoutRoleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ProjectMemberCreateOrConnectWithoutRoleInputSchema), z.lazy(() => ProjectMemberCreateOrConnectWithoutRoleInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ProjectMemberUpsertWithWhereUniqueWithoutRoleInputSchema), z.lazy(() => ProjectMemberUpsertWithWhereUniqueWithoutRoleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ProjectMemberCreateManyRoleInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ProjectMemberWhereUniqueInputSchema), z.lazy(() => ProjectMemberWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ProjectMemberWhereUniqueInputSchema), z.lazy(() => ProjectMemberWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ProjectMemberWhereUniqueInputSchema), z.lazy(() => ProjectMemberWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ProjectMemberWhereUniqueInputSchema), z.lazy(() => ProjectMemberWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ProjectMemberUpdateWithWhereUniqueWithoutRoleInputSchema), z.lazy(() => ProjectMemberUpdateWithWhereUniqueWithoutRoleInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ProjectMemberUpdateManyWithWhereWithoutRoleInputSchema), z.lazy(() => ProjectMemberUpdateManyWithWhereWithoutRoleInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ProjectMemberScalarWhereInputSchema), z.lazy(() => ProjectMemberScalarWhereInputSchema).array() ]).optional(),
});

export default ProjectMemberUncheckedUpdateManyWithoutRoleNestedInputSchema;
