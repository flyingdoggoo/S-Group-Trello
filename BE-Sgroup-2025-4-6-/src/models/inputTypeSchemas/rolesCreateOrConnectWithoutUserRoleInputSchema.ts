import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { rolesWhereUniqueInputSchema } from './rolesWhereUniqueInputSchema';
import { rolesCreateWithoutUserRoleInputSchema } from './rolesCreateWithoutUserRoleInputSchema';
import { rolesUncheckedCreateWithoutUserRoleInputSchema } from './rolesUncheckedCreateWithoutUserRoleInputSchema';

export const rolesCreateOrConnectWithoutUserRoleInputSchema: z.ZodType<Prisma.rolesCreateOrConnectWithoutUserRoleInput> = z.strictObject({
  where: z.lazy(() => rolesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => rolesCreateWithoutUserRoleInputSchema), z.lazy(() => rolesUncheckedCreateWithoutUserRoleInputSchema) ]),
});

export default rolesCreateOrConnectWithoutUserRoleInputSchema;
