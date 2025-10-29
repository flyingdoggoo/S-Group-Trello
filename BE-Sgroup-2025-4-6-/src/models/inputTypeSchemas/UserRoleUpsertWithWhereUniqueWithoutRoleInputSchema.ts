import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserRoleWhereUniqueInputSchema } from './UserRoleWhereUniqueInputSchema';
import { UserRoleUpdateWithoutRoleInputSchema } from './UserRoleUpdateWithoutRoleInputSchema';
import { UserRoleUncheckedUpdateWithoutRoleInputSchema } from './UserRoleUncheckedUpdateWithoutRoleInputSchema';
import { UserRoleCreateWithoutRoleInputSchema } from './UserRoleCreateWithoutRoleInputSchema';
import { UserRoleUncheckedCreateWithoutRoleInputSchema } from './UserRoleUncheckedCreateWithoutRoleInputSchema';

export const UserRoleUpsertWithWhereUniqueWithoutRoleInputSchema: z.ZodType<Prisma.UserRoleUpsertWithWhereUniqueWithoutRoleInput> = z.strictObject({
  where: z.lazy(() => UserRoleWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => UserRoleUpdateWithoutRoleInputSchema), z.lazy(() => UserRoleUncheckedUpdateWithoutRoleInputSchema) ]),
  create: z.union([ z.lazy(() => UserRoleCreateWithoutRoleInputSchema), z.lazy(() => UserRoleUncheckedCreateWithoutRoleInputSchema) ]),
});

export default UserRoleUpsertWithWhereUniqueWithoutRoleInputSchema;
