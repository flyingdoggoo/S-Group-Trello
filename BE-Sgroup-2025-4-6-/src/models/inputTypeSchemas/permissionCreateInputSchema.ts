import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RolePermissionCreateNestedManyWithoutPermissionInputSchema } from './RolePermissionCreateNestedManyWithoutPermissionInputSchema';

export const permissionCreateInputSchema: z.ZodType<Prisma.permissionCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  permission: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  RolePermission: z.lazy(() => RolePermissionCreateNestedManyWithoutPermissionInputSchema).optional(),
});

export default permissionCreateInputSchema;
