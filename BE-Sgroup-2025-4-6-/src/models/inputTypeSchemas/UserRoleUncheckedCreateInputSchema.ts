import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const UserRoleUncheckedCreateInputSchema: z.ZodType<Prisma.UserRoleUncheckedCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  userId: z.string(),
  roleId: z.string(),
  assignedAt: z.coerce.date().optional(),
});

export default UserRoleUncheckedCreateInputSchema;
