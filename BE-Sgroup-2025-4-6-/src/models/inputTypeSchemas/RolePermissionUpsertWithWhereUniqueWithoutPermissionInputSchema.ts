import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RolePermissionWhereUniqueInputSchema } from './RolePermissionWhereUniqueInputSchema';
import { RolePermissionUpdateWithoutPermissionInputSchema } from './RolePermissionUpdateWithoutPermissionInputSchema';
import { RolePermissionUncheckedUpdateWithoutPermissionInputSchema } from './RolePermissionUncheckedUpdateWithoutPermissionInputSchema';
import { RolePermissionCreateWithoutPermissionInputSchema } from './RolePermissionCreateWithoutPermissionInputSchema';
import { RolePermissionUncheckedCreateWithoutPermissionInputSchema } from './RolePermissionUncheckedCreateWithoutPermissionInputSchema';

export const RolePermissionUpsertWithWhereUniqueWithoutPermissionInputSchema: z.ZodType<Prisma.RolePermissionUpsertWithWhereUniqueWithoutPermissionInput> = z.strictObject({
  where: z.lazy(() => RolePermissionWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => RolePermissionUpdateWithoutPermissionInputSchema), z.lazy(() => RolePermissionUncheckedUpdateWithoutPermissionInputSchema) ]),
  create: z.union([ z.lazy(() => RolePermissionCreateWithoutPermissionInputSchema), z.lazy(() => RolePermissionUncheckedCreateWithoutPermissionInputSchema) ]),
});

export default RolePermissionUpsertWithWhereUniqueWithoutPermissionInputSchema;
