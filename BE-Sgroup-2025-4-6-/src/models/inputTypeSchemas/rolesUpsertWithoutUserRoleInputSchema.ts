import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { rolesUpdateWithoutUserRoleInputSchema } from './rolesUpdateWithoutUserRoleInputSchema';
import { rolesUncheckedUpdateWithoutUserRoleInputSchema } from './rolesUncheckedUpdateWithoutUserRoleInputSchema';
import { rolesCreateWithoutUserRoleInputSchema } from './rolesCreateWithoutUserRoleInputSchema';
import { rolesUncheckedCreateWithoutUserRoleInputSchema } from './rolesUncheckedCreateWithoutUserRoleInputSchema';
import { rolesWhereInputSchema } from './rolesWhereInputSchema';

export const rolesUpsertWithoutUserRoleInputSchema: z.ZodType<Prisma.rolesUpsertWithoutUserRoleInput> = z.strictObject({
  update: z.union([ z.lazy(() => rolesUpdateWithoutUserRoleInputSchema), z.lazy(() => rolesUncheckedUpdateWithoutUserRoleInputSchema) ]),
  create: z.union([ z.lazy(() => rolesCreateWithoutUserRoleInputSchema), z.lazy(() => rolesUncheckedCreateWithoutUserRoleInputSchema) ]),
  where: z.lazy(() => rolesWhereInputSchema).optional(),
});

export default rolesUpsertWithoutUserRoleInputSchema;
