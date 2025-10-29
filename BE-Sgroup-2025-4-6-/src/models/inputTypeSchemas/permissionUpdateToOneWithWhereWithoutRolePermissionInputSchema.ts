import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { permissionWhereInputSchema } from './permissionWhereInputSchema';
import { permissionUpdateWithoutRolePermissionInputSchema } from './permissionUpdateWithoutRolePermissionInputSchema';
import { permissionUncheckedUpdateWithoutRolePermissionInputSchema } from './permissionUncheckedUpdateWithoutRolePermissionInputSchema';

export const permissionUpdateToOneWithWhereWithoutRolePermissionInputSchema: z.ZodType<Prisma.permissionUpdateToOneWithWhereWithoutRolePermissionInput> = z.strictObject({
  where: z.lazy(() => permissionWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => permissionUpdateWithoutRolePermissionInputSchema), z.lazy(() => permissionUncheckedUpdateWithoutRolePermissionInputSchema) ]),
});

export default permissionUpdateToOneWithWhereWithoutRolePermissionInputSchema;
