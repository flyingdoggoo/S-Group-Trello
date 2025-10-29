import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { rolesCreateNestedOneWithoutUserRoleInputSchema } from './rolesCreateNestedOneWithoutUserRoleInputSchema';

export const UserRoleCreateWithoutUserInputSchema: z.ZodType<Prisma.UserRoleCreateWithoutUserInput> = z.strictObject({
  id: z.uuid().optional(),
  assignedAt: z.coerce.date().optional(),
  role: z.lazy(() => rolesCreateNestedOneWithoutUserRoleInputSchema),
});

export default UserRoleCreateWithoutUserInputSchema;
