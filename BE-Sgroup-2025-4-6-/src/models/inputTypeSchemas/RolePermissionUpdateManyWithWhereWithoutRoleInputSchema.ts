import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RolePermissionScalarWhereInputSchema } from './RolePermissionScalarWhereInputSchema';
import { RolePermissionUpdateManyMutationInputSchema } from './RolePermissionUpdateManyMutationInputSchema';
import { RolePermissionUncheckedUpdateManyWithoutRoleInputSchema } from './RolePermissionUncheckedUpdateManyWithoutRoleInputSchema';

export const RolePermissionUpdateManyWithWhereWithoutRoleInputSchema: z.ZodType<Prisma.RolePermissionUpdateManyWithWhereWithoutRoleInput> = z.strictObject({
  where: z.lazy(() => RolePermissionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RolePermissionUpdateManyMutationInputSchema), z.lazy(() => RolePermissionUncheckedUpdateManyWithoutRoleInputSchema) ]),
});

export default RolePermissionUpdateManyWithWhereWithoutRoleInputSchema;
