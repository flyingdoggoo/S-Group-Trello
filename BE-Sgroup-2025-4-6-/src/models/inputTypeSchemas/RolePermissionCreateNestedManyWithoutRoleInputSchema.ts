import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RolePermissionCreateWithoutRoleInputSchema } from './RolePermissionCreateWithoutRoleInputSchema';
import { RolePermissionUncheckedCreateWithoutRoleInputSchema } from './RolePermissionUncheckedCreateWithoutRoleInputSchema';
import { RolePermissionCreateOrConnectWithoutRoleInputSchema } from './RolePermissionCreateOrConnectWithoutRoleInputSchema';
import { RolePermissionCreateManyRoleInputEnvelopeSchema } from './RolePermissionCreateManyRoleInputEnvelopeSchema';
import { RolePermissionWhereUniqueInputSchema } from './RolePermissionWhereUniqueInputSchema';

export const RolePermissionCreateNestedManyWithoutRoleInputSchema: z.ZodType<Prisma.RolePermissionCreateNestedManyWithoutRoleInput> = z.strictObject({
  create: z.union([ z.lazy(() => RolePermissionCreateWithoutRoleInputSchema), z.lazy(() => RolePermissionCreateWithoutRoleInputSchema).array(), z.lazy(() => RolePermissionUncheckedCreateWithoutRoleInputSchema), z.lazy(() => RolePermissionUncheckedCreateWithoutRoleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => RolePermissionCreateOrConnectWithoutRoleInputSchema), z.lazy(() => RolePermissionCreateOrConnectWithoutRoleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => RolePermissionCreateManyRoleInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => RolePermissionWhereUniqueInputSchema), z.lazy(() => RolePermissionWhereUniqueInputSchema).array() ]).optional(),
});

export default RolePermissionCreateNestedManyWithoutRoleInputSchema;
