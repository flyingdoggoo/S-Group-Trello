import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { rolesWhereInputSchema } from './rolesWhereInputSchema';
import { rolesUpdateWithoutUserRoleInputSchema } from './rolesUpdateWithoutUserRoleInputSchema';
import { rolesUncheckedUpdateWithoutUserRoleInputSchema } from './rolesUncheckedUpdateWithoutUserRoleInputSchema';

export const rolesUpdateToOneWithWhereWithoutUserRoleInputSchema: z.ZodType<Prisma.rolesUpdateToOneWithWhereWithoutUserRoleInput> = z.strictObject({
  where: z.lazy(() => rolesWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => rolesUpdateWithoutUserRoleInputSchema), z.lazy(() => rolesUncheckedUpdateWithoutUserRoleInputSchema) ]),
});

export default rolesUpdateToOneWithWhereWithoutUserRoleInputSchema;
