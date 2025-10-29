import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { rolesCreateNestedOneWithoutRolePermissionInputSchema } from './rolesCreateNestedOneWithoutRolePermissionInputSchema';

export const RolePermissionCreateWithoutPermissionInputSchema: z.ZodType<Prisma.RolePermissionCreateWithoutPermissionInput> = z.strictObject({
  id: z.uuid().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  role: z.lazy(() => rolesCreateNestedOneWithoutRolePermissionInputSchema),
});

export default RolePermissionCreateWithoutPermissionInputSchema;
