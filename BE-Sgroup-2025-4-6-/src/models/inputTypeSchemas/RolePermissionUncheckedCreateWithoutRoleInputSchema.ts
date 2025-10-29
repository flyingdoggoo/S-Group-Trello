import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const RolePermissionUncheckedCreateWithoutRoleInputSchema: z.ZodType<Prisma.RolePermissionUncheckedCreateWithoutRoleInput> = z.strictObject({
  id: z.uuid().optional(),
  permissionId: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
});

export default RolePermissionUncheckedCreateWithoutRoleInputSchema;
