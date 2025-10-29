import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { rolesCreateWithoutUserRoleInputSchema } from './rolesCreateWithoutUserRoleInputSchema';
import { rolesUncheckedCreateWithoutUserRoleInputSchema } from './rolesUncheckedCreateWithoutUserRoleInputSchema';
import { rolesCreateOrConnectWithoutUserRoleInputSchema } from './rolesCreateOrConnectWithoutUserRoleInputSchema';
import { rolesUpsertWithoutUserRoleInputSchema } from './rolesUpsertWithoutUserRoleInputSchema';
import { rolesWhereUniqueInputSchema } from './rolesWhereUniqueInputSchema';
import { rolesUpdateToOneWithWhereWithoutUserRoleInputSchema } from './rolesUpdateToOneWithWhereWithoutUserRoleInputSchema';
import { rolesUpdateWithoutUserRoleInputSchema } from './rolesUpdateWithoutUserRoleInputSchema';
import { rolesUncheckedUpdateWithoutUserRoleInputSchema } from './rolesUncheckedUpdateWithoutUserRoleInputSchema';

export const rolesUpdateOneRequiredWithoutUserRoleNestedInputSchema: z.ZodType<Prisma.rolesUpdateOneRequiredWithoutUserRoleNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => rolesCreateWithoutUserRoleInputSchema), z.lazy(() => rolesUncheckedCreateWithoutUserRoleInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => rolesCreateOrConnectWithoutUserRoleInputSchema).optional(),
  upsert: z.lazy(() => rolesUpsertWithoutUserRoleInputSchema).optional(),
  connect: z.lazy(() => rolesWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => rolesUpdateToOneWithWhereWithoutUserRoleInputSchema), z.lazy(() => rolesUpdateWithoutUserRoleInputSchema), z.lazy(() => rolesUncheckedUpdateWithoutUserRoleInputSchema) ]).optional(),
});

export default rolesUpdateOneRequiredWithoutUserRoleNestedInputSchema;
