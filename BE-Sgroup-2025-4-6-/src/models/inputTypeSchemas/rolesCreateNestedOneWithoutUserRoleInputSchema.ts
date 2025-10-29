import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { rolesCreateWithoutUserRoleInputSchema } from './rolesCreateWithoutUserRoleInputSchema';
import { rolesUncheckedCreateWithoutUserRoleInputSchema } from './rolesUncheckedCreateWithoutUserRoleInputSchema';
import { rolesCreateOrConnectWithoutUserRoleInputSchema } from './rolesCreateOrConnectWithoutUserRoleInputSchema';
import { rolesWhereUniqueInputSchema } from './rolesWhereUniqueInputSchema';

export const rolesCreateNestedOneWithoutUserRoleInputSchema: z.ZodType<Prisma.rolesCreateNestedOneWithoutUserRoleInput> = z.strictObject({
  create: z.union([ z.lazy(() => rolesCreateWithoutUserRoleInputSchema), z.lazy(() => rolesUncheckedCreateWithoutUserRoleInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => rolesCreateOrConnectWithoutUserRoleInputSchema).optional(),
  connect: z.lazy(() => rolesWhereUniqueInputSchema).optional(),
});

export default rolesCreateNestedOneWithoutUserRoleInputSchema;
