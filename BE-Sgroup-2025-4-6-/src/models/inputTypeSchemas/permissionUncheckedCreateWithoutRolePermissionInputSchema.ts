import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const permissionUncheckedCreateWithoutRolePermissionInputSchema: z.ZodType<Prisma.permissionUncheckedCreateWithoutRolePermissionInput> = z.strictObject({
  id: z.uuid().optional(),
  permission: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
});

export default permissionUncheckedCreateWithoutRolePermissionInputSchema;
