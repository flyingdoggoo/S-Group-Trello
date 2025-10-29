import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { permissionCreateNestedOneWithoutRolePermissionInputSchema } from './permissionCreateNestedOneWithoutRolePermissionInputSchema';

export const RolePermissionCreateWithoutRoleInputSchema: z.ZodType<Prisma.RolePermissionCreateWithoutRoleInput> = z.strictObject({
  id: z.uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  permission: z.lazy(() => permissionCreateNestedOneWithoutRolePermissionInputSchema),
});

export default RolePermissionCreateWithoutRoleInputSchema;
