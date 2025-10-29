import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserRoleWhereUniqueInputSchema } from './UserRoleWhereUniqueInputSchema';
import { UserRoleCreateWithoutRoleInputSchema } from './UserRoleCreateWithoutRoleInputSchema';
import { UserRoleUncheckedCreateWithoutRoleInputSchema } from './UserRoleUncheckedCreateWithoutRoleInputSchema';

export const UserRoleCreateOrConnectWithoutRoleInputSchema: z.ZodType<Prisma.UserRoleCreateOrConnectWithoutRoleInput> = z.strictObject({
  where: z.lazy(() => UserRoleWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => UserRoleCreateWithoutRoleInputSchema), z.lazy(() => UserRoleUncheckedCreateWithoutRoleInputSchema) ]),
});

export default UserRoleCreateOrConnectWithoutRoleInputSchema;
