import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RolePermissionCreateWithoutPermissionInputSchema } from './RolePermissionCreateWithoutPermissionInputSchema';
import { RolePermissionUncheckedCreateWithoutPermissionInputSchema } from './RolePermissionUncheckedCreateWithoutPermissionInputSchema';
import { RolePermissionCreateOrConnectWithoutPermissionInputSchema } from './RolePermissionCreateOrConnectWithoutPermissionInputSchema';
import { RolePermissionCreateManyPermissionInputEnvelopeSchema } from './RolePermissionCreateManyPermissionInputEnvelopeSchema';
import { RolePermissionWhereUniqueInputSchema } from './RolePermissionWhereUniqueInputSchema';

export const RolePermissionUncheckedCreateNestedManyWithoutPermissionInputSchema: z.ZodType<Prisma.RolePermissionUncheckedCreateNestedManyWithoutPermissionInput> = z.strictObject({
  create: z.union([ z.lazy(() => RolePermissionCreateWithoutPermissionInputSchema), z.lazy(() => RolePermissionCreateWithoutPermissionInputSchema).array(), z.lazy(() => RolePermissionUncheckedCreateWithoutPermissionInputSchema), z.lazy(() => RolePermissionUncheckedCreateWithoutPermissionInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RolePermissionCreateOrConnectWithoutPermissionInputSchema), z.lazy(() => RolePermissionCreateOrConnectWithoutPermissionInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RolePermissionCreateManyPermissionInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RolePermissionWhereUniqueInputSchema), z.lazy(() => RolePermissionWhereUniqueInputSchema).array() ]).optional(),
});

export default RolePermissionUncheckedCreateNestedManyWithoutPermissionInputSchema;
