import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { permissionUpdateWithoutRolePermissionInputSchema } from './permissionUpdateWithoutRolePermissionInputSchema';
import { permissionUncheckedUpdateWithoutRolePermissionInputSchema } from './permissionUncheckedUpdateWithoutRolePermissionInputSchema';
import { permissionCreateWithoutRolePermissionInputSchema } from './permissionCreateWithoutRolePermissionInputSchema';
import { permissionUncheckedCreateWithoutRolePermissionInputSchema } from './permissionUncheckedCreateWithoutRolePermissionInputSchema';
import { permissionWhereInputSchema } from './permissionWhereInputSchema';

export const permissionUpsertWithoutRolePermissionInputSchema: z.ZodType<Prisma.permissionUpsertWithoutRolePermissionInput> = z.strictObject({
  update: z.union([ z.lazy(() => permissionUpdateWithoutRolePermissionInputSchema), z.lazy(() => permissionUncheckedUpdateWithoutRolePermissionInputSchema) ]),
  create: z.union([ z.lazy(() => permissionCreateWithoutRolePermissionInputSchema), z.lazy(() => permissionUncheckedCreateWithoutRolePermissionInputSchema) ]),
  where: z.lazy(() => permissionWhereInputSchema).optional(),
});

export default permissionUpsertWithoutRolePermissionInputSchema;
