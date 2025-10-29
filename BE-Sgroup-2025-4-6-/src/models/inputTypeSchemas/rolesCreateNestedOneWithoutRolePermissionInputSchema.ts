import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { rolesCreateWithoutRolePermissionInputSchema } from './rolesCreateWithoutRolePermissionInputSchema';
import { rolesUncheckedCreateWithoutRolePermissionInputSchema } from './rolesUncheckedCreateWithoutRolePermissionInputSchema';
import { rolesCreateOrConnectWithoutRolePermissionInputSchema } from './rolesCreateOrConnectWithoutRolePermissionInputSchema';
import { rolesWhereUniqueInputSchema } from './rolesWhereUniqueInputSchema';

export const rolesCreateNestedOneWithoutRolePermissionInputSchema: z.ZodType<Prisma.rolesCreateNestedOneWithoutRolePermissionInput> = z.strictObject({
  create: z.union([ z.lazy(() => rolesCreateWithoutRolePermissionInputSchema), z.lazy(() => rolesUncheckedCreateWithoutRolePermissionInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => rolesCreateOrConnectWithoutRolePermissionInputSchema).optional(),
  connect: z.lazy(() => rolesWhereUniqueInputSchema).optional(),
});

export default rolesCreateNestedOneWithoutRolePermissionInputSchema;
