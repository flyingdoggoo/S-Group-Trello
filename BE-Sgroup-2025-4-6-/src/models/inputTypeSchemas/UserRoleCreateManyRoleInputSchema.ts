import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const UserRoleCreateManyRoleInputSchema: z.ZodType<Prisma.UserRoleCreateManyRoleInput> = z.strictObject({
  id: z.uuid().optional(),
  userId: z.string(),
  assignedAt: z.coerce.date().optional(),
});

export default UserRoleCreateManyRoleInputSchema;
