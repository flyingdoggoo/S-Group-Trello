import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { rolesWhereInputSchema } from './rolesWhereInputSchema';
import { rolesUpdateWithoutRolePermissionInputSchema } from './rolesUpdateWithoutRolePermissionInputSchema';
import { rolesUncheckedUpdateWithoutRolePermissionInputSchema } from './rolesUncheckedUpdateWithoutRolePermissionInputSchema';

export const rolesUpdateToOneWithWhereWithoutRolePermissionInputSchema: z.ZodType<Prisma.rolesUpdateToOneWithWhereWithoutRolePermissionInput> = z.strictObject({
  where: z.lazy(() => rolesWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => rolesUpdateWithoutRolePermissionInputSchema), z.lazy(() => rolesUncheckedUpdateWithoutRolePermissionInputSchema) ]),
});

export default rolesUpdateToOneWithWhereWithoutRolePermissionInputSchema;
