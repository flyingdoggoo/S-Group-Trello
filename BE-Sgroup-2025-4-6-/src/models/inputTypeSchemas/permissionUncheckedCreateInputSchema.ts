import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RolePermissionUncheckedCreateNestedManyWithoutPermissionInputSchema } from './RolePermissionUncheckedCreateNestedManyWithoutPermissionInputSchema';

export const permissionUncheckedCreateInputSchema: z.ZodType<Prisma.permissionUncheckedCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  permission: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  RolePermission: z.lazy(() => RolePermissionUncheckedCreateNestedManyWithoutPermissionInputSchema).optional(),
});

export default permissionUncheckedCreateInputSchema;
