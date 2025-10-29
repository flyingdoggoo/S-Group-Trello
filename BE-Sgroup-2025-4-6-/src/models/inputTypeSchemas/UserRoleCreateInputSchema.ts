import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateNestedOneWithoutUserRoleInputSchema } from './usersCreateNestedOneWithoutUserRoleInputSchema';
import { rolesCreateNestedOneWithoutUserRoleInputSchema } from './rolesCreateNestedOneWithoutUserRoleInputSchema';

export const UserRoleCreateInputSchema: z.ZodType<Prisma.UserRoleCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  assignedAt: z.coerce.date().optional(),
  user: z.lazy(() => usersCreateNestedOneWithoutUserRoleInputSchema),
  role: z.lazy(() => rolesCreateNestedOneWithoutUserRoleInputSchema),
});

export default UserRoleCreateInputSchema;
