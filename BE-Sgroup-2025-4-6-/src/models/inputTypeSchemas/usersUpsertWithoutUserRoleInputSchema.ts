import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersUpdateWithoutUserRoleInputSchema } from './usersUpdateWithoutUserRoleInputSchema';
import { usersUncheckedUpdateWithoutUserRoleInputSchema } from './usersUncheckedUpdateWithoutUserRoleInputSchema';
import { usersCreateWithoutUserRoleInputSchema } from './usersCreateWithoutUserRoleInputSchema';
import { usersUncheckedCreateWithoutUserRoleInputSchema } from './usersUncheckedCreateWithoutUserRoleInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const usersUpsertWithoutUserRoleInputSchema: z.ZodType<Prisma.usersUpsertWithoutUserRoleInput> = z.strictObject({
  update: z.union([ z.lazy(() => usersUpdateWithoutUserRoleInputSchema), z.lazy(() => usersUncheckedUpdateWithoutUserRoleInputSchema) ]),
  create: z.union([ z.lazy(() => usersCreateWithoutUserRoleInputSchema), z.lazy(() => usersUncheckedCreateWithoutUserRoleInputSchema) ]),
  where: z.lazy(() => usersWhereInputSchema).optional(),
});

export default usersUpsertWithoutUserRoleInputSchema;
