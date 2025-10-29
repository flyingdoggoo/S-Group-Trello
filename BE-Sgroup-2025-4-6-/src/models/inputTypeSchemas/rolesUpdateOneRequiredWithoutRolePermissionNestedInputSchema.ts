import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { rolesCreateWithoutRolePermissionInputSchema } from './rolesCreateWithoutRolePermissionInputSchema';
import { rolesUncheckedCreateWithoutRolePermissionInputSchema } from './rolesUncheckedCreateWithoutRolePermissionInputSchema';
import { rolesCreateOrConnectWithoutRolePermissionInputSchema } from './rolesCreateOrConnectWithoutRolePermissionInputSchema';
import { rolesUpsertWithoutRolePermissionInputSchema } from './rolesUpsertWithoutRolePermissionInputSchema';
import { rolesWhereUniqueInputSchema } from './rolesWhereUniqueInputSchema';
import { rolesUpdateToOneWithWhereWithoutRolePermissionInputSchema } from './rolesUpdateToOneWithWhereWithoutRolePermissionInputSchema';
import { rolesUpdateWithoutRolePermissionInputSchema } from './rolesUpdateWithoutRolePermissionInputSchema';
import { rolesUncheckedUpdateWithoutRolePermissionInputSchema } from './rolesUncheckedUpdateWithoutRolePermissionInputSchema';

export const rolesUpdateOneRequiredWithoutRolePermissionNestedInputSchema: z.ZodType<Prisma.rolesUpdateOneRequiredWithoutRolePermissionNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => rolesCreateWithoutRolePermissionInputSchema), z.lazy(() => rolesUncheckedCreateWithoutRolePermissionInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => rolesCreateOrConnectWithoutRolePermissionInputSchema).optional(),
  upsert: z.lazy(() => rolesUpsertWithoutRolePermissionInputSchema).optional(),
  connect: z.lazy(() => rolesWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => rolesUpdateToOneWithWhereWithoutRolePermissionInputSchema), z.lazy(() => rolesUpdateWithoutRolePermissionInputSchema), z.lazy(() => rolesUncheckedUpdateWithoutRolePermissionInputSchema) ]).optional(),
});

export default rolesUpdateOneRequiredWithoutRolePermissionNestedInputSchema;
