import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RolePermissionScalarWhereInputSchema } from './RolePermissionScalarWhereInputSchema';
import { RolePermissionUpdateManyMutationInputSchema } from './RolePermissionUpdateManyMutationInputSchema';
import { RolePermissionUncheckedUpdateManyWithoutPermissionInputSchema } from './RolePermissionUncheckedUpdateManyWithoutPermissionInputSchema';

export const RolePermissionUpdateManyWithWhereWithoutPermissionInputSchema: z.ZodType<Prisma.RolePermissionUpdateManyWithWhereWithoutPermissionInput> = z.strictObject({
  where: z.lazy(() => RolePermissionScalarWhereInputSchema),
  data: z.union([ z.lazy(() => RolePermissionUpdateManyMutationInputSchema), z.lazy(() => RolePermissionUncheckedUpdateManyWithoutPermissionInputSchema) ]),
});

export default RolePermissionUpdateManyWithWhereWithoutPermissionInputSchema;
