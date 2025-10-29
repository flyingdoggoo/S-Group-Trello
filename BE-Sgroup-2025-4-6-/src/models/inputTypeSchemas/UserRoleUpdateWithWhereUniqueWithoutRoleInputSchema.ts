import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserRoleWhereUniqueInputSchema } from './UserRoleWhereUniqueInputSchema';
import { UserRoleUpdateWithoutRoleInputSchema } from './UserRoleUpdateWithoutRoleInputSchema';
import { UserRoleUncheckedUpdateWithoutRoleInputSchema } from './UserRoleUncheckedUpdateWithoutRoleInputSchema';

export const UserRoleUpdateWithWhereUniqueWithoutRoleInputSchema: z.ZodType<Prisma.UserRoleUpdateWithWhereUniqueWithoutRoleInput> = z.strictObject({
  where: z.lazy(() => UserRoleWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => UserRoleUpdateWithoutRoleInputSchema), z.lazy(() => UserRoleUncheckedUpdateWithoutRoleInputSchema) ]),
});

export default UserRoleUpdateWithWhereUniqueWithoutRoleInputSchema;
