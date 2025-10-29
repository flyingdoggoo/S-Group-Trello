import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RolePermissionWhereUniqueInputSchema } from './RolePermissionWhereUniqueInputSchema';
import { RolePermissionUpdateWithoutPermissionInputSchema } from './RolePermissionUpdateWithoutPermissionInputSchema';
import { RolePermissionUncheckedUpdateWithoutPermissionInputSchema } from './RolePermissionUncheckedUpdateWithoutPermissionInputSchema';

export const RolePermissionUpdateWithWhereUniqueWithoutPermissionInputSchema: z.ZodType<Prisma.RolePermissionUpdateWithWhereUniqueWithoutPermissionInput> = z.strictObject({
  where: z.lazy(() => RolePermissionWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => RolePermissionUpdateWithoutPermissionInputSchema), z.lazy(() => RolePermissionUncheckedUpdateWithoutPermissionInputSchema) ]),
});

export default RolePermissionUpdateWithWhereUniqueWithoutPermissionInputSchema;
