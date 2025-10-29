import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { rolesWhereUniqueInputSchema } from './rolesWhereUniqueInputSchema';
import { rolesCreateWithoutRolePermissionInputSchema } from './rolesCreateWithoutRolePermissionInputSchema';
import { rolesUncheckedCreateWithoutRolePermissionInputSchema } from './rolesUncheckedCreateWithoutRolePermissionInputSchema';

export const rolesCreateOrConnectWithoutRolePermissionInputSchema: z.ZodType<Prisma.rolesCreateOrConnectWithoutRolePermissionInput> = z.strictObject({
  where: z.lazy(() => rolesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => rolesCreateWithoutRolePermissionInputSchema), z.lazy(() => rolesUncheckedCreateWithoutRolePermissionInputSchema) ]),
});

export default rolesCreateOrConnectWithoutRolePermissionInputSchema;
