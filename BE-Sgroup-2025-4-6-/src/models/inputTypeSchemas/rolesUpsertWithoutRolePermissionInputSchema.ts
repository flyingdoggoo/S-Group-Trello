import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { rolesUpdateWithoutRolePermissionInputSchema } from './rolesUpdateWithoutRolePermissionInputSchema';
import { rolesUncheckedUpdateWithoutRolePermissionInputSchema } from './rolesUncheckedUpdateWithoutRolePermissionInputSchema';
import { rolesCreateWithoutRolePermissionInputSchema } from './rolesCreateWithoutRolePermissionInputSchema';
import { rolesUncheckedCreateWithoutRolePermissionInputSchema } from './rolesUncheckedCreateWithoutRolePermissionInputSchema';
import { rolesWhereInputSchema } from './rolesWhereInputSchema';

export const rolesUpsertWithoutRolePermissionInputSchema: z.ZodType<Prisma.rolesUpsertWithoutRolePermissionInput> = z.strictObject({
  update: z.union([ z.lazy(() => rolesUpdateWithoutRolePermissionInputSchema), z.lazy(() => rolesUncheckedUpdateWithoutRolePermissionInputSchema) ]),
  create: z.union([ z.lazy(() => rolesCreateWithoutRolePermissionInputSchema), z.lazy(() => rolesUncheckedCreateWithoutRolePermissionInputSchema) ]),
  where: z.lazy(() => rolesWhereInputSchema).optional(),
});

export default rolesUpsertWithoutRolePermissionInputSchema;
