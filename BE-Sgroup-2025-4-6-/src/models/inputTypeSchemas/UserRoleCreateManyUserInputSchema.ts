import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const UserRoleCreateManyUserInputSchema: z.ZodType<Prisma.UserRoleCreateManyUserInput> = z.strictObject({
  id: z.uuid().optional(),
  roleId: z.string(),
  assignedAt: z.coerce.date().optional(),
});

export default UserRoleCreateManyUserInputSchema;
