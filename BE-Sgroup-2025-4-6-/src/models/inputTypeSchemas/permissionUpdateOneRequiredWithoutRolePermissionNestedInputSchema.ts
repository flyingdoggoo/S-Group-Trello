import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { permissionCreateWithoutRolePermissionInputSchema } from './permissionCreateWithoutRolePermissionInputSchema';
import { permissionUncheckedCreateWithoutRolePermissionInputSchema } from './permissionUncheckedCreateWithoutRolePermissionInputSchema';
import { permissionCreateOrConnectWithoutRolePermissionInputSchema } from './permissionCreateOrConnectWithoutRolePermissionInputSchema';
import { permissionUpsertWithoutRolePermissionInputSchema } from './permissionUpsertWithoutRolePermissionInputSchema';
import { permissionWhereUniqueInputSchema } from './permissionWhereUniqueInputSchema';
import { permissionUpdateToOneWithWhereWithoutRolePermissionInputSchema } from './permissionUpdateToOneWithWhereWithoutRolePermissionInputSchema';
import { permissionUpdateWithoutRolePermissionInputSchema } from './permissionUpdateWithoutRolePermissionInputSchema';
import { permissionUncheckedUpdateWithoutRolePermissionInputSchema } from './permissionUncheckedUpdateWithoutRolePermissionInputSchema';

export const permissionUpdateOneRequiredWithoutRolePermissionNestedInputSchema: z.ZodType<Prisma.permissionUpdateOneRequiredWithoutRolePermissionNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => permissionCreateWithoutRolePermissionInputSchema), z.lazy(() => permissionUncheckedCreateWithoutRolePermissionInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => permissionCreateOrConnectWithoutRolePermissionInputSchema).optional(),
  upsert: z.lazy(() => permissionUpsertWithoutRolePermissionInputSchema).optional(),
  connect: z.lazy(() => permissionWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => permissionUpdateToOneWithWhereWithoutRolePermissionInputSchema), z.lazy(() => permissionUpdateWithoutRolePermissionInputSchema), z.lazy(() => permissionUncheckedUpdateWithoutRolePermissionInputSchema) ]).optional(),
});

export default permissionUpdateOneRequiredWithoutRolePermissionNestedInputSchema;
