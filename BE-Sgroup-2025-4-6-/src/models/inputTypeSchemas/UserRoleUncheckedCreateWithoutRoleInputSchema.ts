import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const UserRoleUncheckedCreateWithoutRoleInputSchema: z.ZodType<Prisma.UserRoleUncheckedCreateWithoutRoleInput> = z.strictObject({
  id: z.uuid().optional(),
  userId: z.string(),
  assignedAt: z.coerce.date().optional(),
});

export default UserRoleUncheckedCreateWithoutRoleInputSchema;
