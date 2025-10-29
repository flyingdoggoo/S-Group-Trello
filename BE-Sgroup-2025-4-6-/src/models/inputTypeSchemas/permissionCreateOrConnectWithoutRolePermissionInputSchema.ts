import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { permissionWhereUniqueInputSchema } from './permissionWhereUniqueInputSchema';
import { permissionCreateWithoutRolePermissionInputSchema } from './permissionCreateWithoutRolePermissionInputSchema';
import { permissionUncheckedCreateWithoutRolePermissionInputSchema } from './permissionUncheckedCreateWithoutRolePermissionInputSchema';

export const permissionCreateOrConnectWithoutRolePermissionInputSchema: z.ZodType<Prisma.permissionCreateOrConnectWithoutRolePermissionInput> = z.strictObject({
  where: z.lazy(() => permissionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => permissionCreateWithoutRolePermissionInputSchema), z.lazy(() => permissionUncheckedCreateWithoutRolePermissionInputSchema) ]),
});

export default permissionCreateOrConnectWithoutRolePermissionInputSchema;
