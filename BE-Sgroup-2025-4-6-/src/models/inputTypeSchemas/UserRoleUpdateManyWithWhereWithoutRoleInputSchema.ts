import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserRoleScalarWhereInputSchema } from './UserRoleScalarWhereInputSchema';
import { UserRoleUpdateManyMutationInputSchema } from './UserRoleUpdateManyMutationInputSchema';
import { UserRoleUncheckedUpdateManyWithoutRoleInputSchema } from './UserRoleUncheckedUpdateManyWithoutRoleInputSchema';

export const UserRoleUpdateManyWithWhereWithoutRoleInputSchema: z.ZodType<Prisma.UserRoleUpdateManyWithWhereWithoutRoleInput> = z.strictObject({
  where: z.lazy(() => UserRoleScalarWhereInputSchema),
  data: z.union([ z.lazy(() => UserRoleUpdateManyMutationInputSchema), z.lazy(() => UserRoleUncheckedUpdateManyWithoutRoleInputSchema) ]),
});

export default UserRoleUpdateManyWithWhereWithoutRoleInputSchema;
