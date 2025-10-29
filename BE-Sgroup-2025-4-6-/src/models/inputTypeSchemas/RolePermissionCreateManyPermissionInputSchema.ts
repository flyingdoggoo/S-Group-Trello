import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RolePermissionCreateManyPermissionInputSchema: z.ZodType<Prisma.RolePermissionCreateManyPermissionInput> = z.strictObject({
  id: z.uuid().optional(),
  roleId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
});

export default RolePermissionCreateManyPermissionInputSchema;
