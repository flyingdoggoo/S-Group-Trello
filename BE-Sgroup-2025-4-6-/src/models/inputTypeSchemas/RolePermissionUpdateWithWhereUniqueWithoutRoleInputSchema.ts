import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RolePermissionWhereUniqueInputSchema } from './RolePermissionWhereUniqueInputSchema';
import { RolePermissionUpdateWithoutRoleInputSchema } from './RolePermissionUpdateWithoutRoleInputSchema';
import { RolePermissionUncheckedUpdateWithoutRoleInputSchema } from './RolePermissionUncheckedUpdateWithoutRoleInputSchema';

export const RolePermissionUpdateWithWhereUniqueWithoutRoleInputSchema: z.ZodType<Prisma.RolePermissionUpdateWithWhereUniqueWithoutRoleInput> = z.strictObject({
  where: z.lazy(() => RolePermissionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RolePermissionUpdateWithoutRoleInputSchema), z.lazy(() => RolePermissionUncheckedUpdateWithoutRoleInputSchema) ]),
});

export default RolePermissionUpdateWithWhereUniqueWithoutRoleInputSchema;
