import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RolePermissionCreateManyRoleInputSchema: z.ZodType<Prisma.RolePermissionCreateManyRoleInput> = z.strictObject({
  id: z.uuid().optional(),
  permissionId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
});

export default RolePermissionCreateManyRoleInputSchema;
