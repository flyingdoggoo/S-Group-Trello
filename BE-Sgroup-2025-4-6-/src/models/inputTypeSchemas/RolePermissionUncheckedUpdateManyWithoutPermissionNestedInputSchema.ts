import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RolePermissionCreateWithoutPermissionInputSchema } from './RolePermissionCreateWithoutPermissionInputSchema';
import { RolePermissionUncheckedCreateWithoutPermissionInputSchema } from './RolePermissionUncheckedCreateWithoutPermissionInputSchema';
import { RolePermissionCreateOrConnectWithoutPermissionInputSchema } from './RolePermissionCreateOrConnectWithoutPermissionInputSchema';
import { RolePermissionUpsertWithWhereUniqueWithoutPermissionInputSchema } from './RolePermissionUpsertWithWhereUniqueWithoutPermissionInputSchema';
import { RolePermissionCreateManyPermissionInputEnvelopeSchema } from './RolePermissionCreateManyPermissionInputEnvelopeSchema';
import { RolePermissionWhereUniqueInputSchema } from './RolePermissionWhereUniqueInputSchema';
import { RolePermissionUpdateWithWhereUniqueWithoutPermissionInputSchema } from './RolePermissionUpdateWithWhereUniqueWithoutPermissionInputSchema';
import { RolePermissionUpdateManyWithWhereWithoutPermissionInputSchema } from './RolePermissionUpdateManyWithWhereWithoutPermissionInputSchema';
import { RolePermissionScalarWhereInputSchema } from './RolePermissionScalarWhereInputSchema';

export const RolePermissionUncheckedUpdateManyWithoutPermissionNestedInputSchema: z.ZodType<Prisma.RolePermissionUncheckedUpdateManyWithoutPermissionNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => RolePermissionCreateWithoutPermissionInputSchema), z.lazy(() => RolePermissionCreateWithoutPermissionInputSchema).array(), z.lazy(() => RolePermissionUncheckedCreateWithoutPermissionInputSchema), z.lazy(() => RolePermissionUncheckedCreateWithoutPermissionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RolePermissionCreateOrConnectWithoutPermissionInputSchema), z.lazy(() => RolePermissionCreateOrConnectWithoutPermissionInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => RolePermissionUpsertWithWhereUniqueWithoutPermissionInputSchema), z.lazy(() => RolePermissionUpsertWithWhereUniqueWithoutPermissionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RolePermissionCreateManyPermissionInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => RolePermissionWhereUniqueInputSchema), z.lazy(() => RolePermissionWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => RolePermissionWhereUniqueInputSchema), z.lazy(() => RolePermissionWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => RolePermissionWhereUniqueInputSchema), z.lazy(() => RolePermissionWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => RolePermissionWhereUniqueInputSchema), z.lazy(() => RolePermissionWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => RolePermissionUpdateWithWhereUniqueWithoutPermissionInputSchema), z.lazy(() => RolePermissionUpdateWithWhereUniqueWithoutPermissionInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => RolePermissionUpdateManyWithWhereWithoutPermissionInputSchema), z.lazy(() => RolePermissionUpdateManyWithWhereWithoutPermissionInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => RolePermissionScalarWhereInputSchema), z.lazy(() => RolePermissionScalarWhereInputSchema).array() ]).optional(),
});

export default RolePermissionUncheckedUpdateManyWithoutPermissionNestedInputSchema;
