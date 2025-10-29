import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const UserRoleUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.UserRoleUncheckedCreateWithoutUserInput> = z.strictObject({
  id: z.uuid().optional(),
  roleId: z.string(),
  assignedAt: z.coerce.date().optional(),
});

export default UserRoleUncheckedCreateWithoutUserInputSchema;
