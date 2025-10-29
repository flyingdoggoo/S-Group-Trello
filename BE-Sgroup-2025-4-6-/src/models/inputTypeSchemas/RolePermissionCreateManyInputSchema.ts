import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RolePermissionCreateManyInputSchema: z.ZodType<Prisma.RolePermissionCreateManyInput> = z.strictObject({
  id: z.uuid().optional(),
  roleId: z.string(),
  permissionId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
});

export default RolePermissionCreateManyInputSchema;
