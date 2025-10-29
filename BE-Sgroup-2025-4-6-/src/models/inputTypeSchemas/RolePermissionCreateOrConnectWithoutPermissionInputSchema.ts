import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RolePermissionWhereUniqueInputSchema } from './RolePermissionWhereUniqueInputSchema';
import { RolePermissionCreateWithoutPermissionInputSchema } from './RolePermissionCreateWithoutPermissionInputSchema';
import { RolePermissionUncheckedCreateWithoutPermissionInputSchema } from './RolePermissionUncheckedCreateWithoutPermissionInputSchema';

export const RolePermissionCreateOrConnectWithoutPermissionInputSchema: z.ZodType<Prisma.RolePermissionCreateOrConnectWithoutPermissionInput> = z.strictObject({
  where: z.lazy(() => RolePermissionWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => RolePermissionCreateWithoutPermissionInputSchema), z.lazy(() => RolePermissionUncheckedCreateWithoutPermissionInputSchema) ]),
});

export default RolePermissionCreateOrConnectWithoutPermissionInputSchema;
