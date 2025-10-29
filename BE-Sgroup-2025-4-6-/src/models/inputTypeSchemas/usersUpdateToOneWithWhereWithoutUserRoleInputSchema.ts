import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersUpdateWithoutUserRoleInputSchema } from './usersUpdateWithoutUserRoleInputSchema';
import { usersUncheckedUpdateWithoutUserRoleInputSchema } from './usersUncheckedUpdateWithoutUserRoleInputSchema';

export const usersUpdateToOneWithWhereWithoutUserRoleInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutUserRoleInput> = z.strictObject({
  where: z.lazy(() => usersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => usersUpdateWithoutUserRoleInputSchema), z.lazy(() => usersUncheckedUpdateWithoutUserRoleInputSchema) ]),
});

export default usersUpdateToOneWithWhereWithoutUserRoleInputSchema;
