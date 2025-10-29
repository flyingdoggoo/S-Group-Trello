import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { permissionCreateWithoutRolePermissionInputSchema } from './permissionCreateWithoutRolePermissionInputSchema';
import { permissionUncheckedCreateWithoutRolePermissionInputSchema } from './permissionUncheckedCreateWithoutRolePermissionInputSchema';
import { permissionCreateOrConnectWithoutRolePermissionInputSchema } from './permissionCreateOrConnectWithoutRolePermissionInputSchema';
import { permissionWhereUniqueInputSchema } from './permissionWhereUniqueInputSchema';

export const permissionCreateNestedOneWithoutRolePermissionInputSchema: z.ZodType<Prisma.permissionCreateNestedOneWithoutRolePermissionInput> = z.strictObject({
  create: z.union([ z.lazy(() => permissionCreateWithoutRolePermissionInputSchema), z.lazy(() => permissionUncheckedCreateWithoutRolePermissionInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => permissionCreateOrConnectWithoutRolePermissionInputSchema).optional(),
  connect: z.lazy(() => permissionWhereUniqueInputSchema).optional(),
});

export default permissionCreateNestedOneWithoutRolePermissionInputSchema;
