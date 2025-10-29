import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const permissionCreateWithoutRolePermissionInputSchema: z.ZodType<Prisma.permissionCreateWithoutRolePermissionInput> = z.strictObject({
  id: z.uuid().optional(),
  permission: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
});

export default permissionCreateWithoutRolePermissionInputSchema;
