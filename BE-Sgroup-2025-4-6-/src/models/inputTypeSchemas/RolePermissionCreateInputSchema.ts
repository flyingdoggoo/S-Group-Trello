import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { permissionCreateNestedOneWithoutRolePermissionInputSchema } from './permissionCreateNestedOneWithoutRolePermissionInputSchema';
import { rolesCreateNestedOneWithoutRolePermissionInputSchema } from './rolesCreateNestedOneWithoutRolePermissionInputSchema';

export const RolePermissionCreateInputSchema: z.ZodType<Prisma.RolePermissionCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  permission: z.lazy(() => permissionCreateNestedOneWithoutRolePermissionInputSchema),
  role: z.lazy(() => rolesCreateNestedOneWithoutRolePermissionInputSchema),
});

export default RolePermissionCreateInputSchema;
