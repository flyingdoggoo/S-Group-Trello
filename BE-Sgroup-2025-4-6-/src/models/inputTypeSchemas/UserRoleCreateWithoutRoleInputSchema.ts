import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateNestedOneWithoutUserRoleInputSchema } from './usersCreateNestedOneWithoutUserRoleInputSchema';

export const UserRoleCreateWithoutRoleInputSchema: z.ZodType<Prisma.UserRoleCreateWithoutRoleInput> = z.strictObject({
  id: z.uuid().optional(),
  assignedAt: z.coerce.date().optional(),
  user: z.lazy(() => usersCreateNestedOneWithoutUserRoleInputSchema),
});

export default UserRoleCreateWithoutRoleInputSchema;
