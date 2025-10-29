import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const UserRoleCreateManyInputSchema: z.ZodType<Prisma.UserRoleCreateManyInput> = z.strictObject({
  id: z.uuid().optional(),
  userId: z.string(),
  roleId: z.string(),
  assignedAt: z.coerce.date().optional(),
});

export default UserRoleCreateManyInputSchema;
