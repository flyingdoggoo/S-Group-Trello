import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersCreateWithoutUserRoleInputSchema } from './usersCreateWithoutUserRoleInputSchema';
import { usersUncheckedCreateWithoutUserRoleInputSchema } from './usersUncheckedCreateWithoutUserRoleInputSchema';

export const usersCreateOrConnectWithoutUserRoleInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutUserRoleInput> = z.strictObject({
  where: z.lazy(() => usersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => usersCreateWithoutUserRoleInputSchema), z.lazy(() => usersUncheckedCreateWithoutUserRoleInputSchema) ]),
});

export default usersCreateOrConnectWithoutUserRoleInputSchema;
