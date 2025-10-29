import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutUserRoleInputSchema } from './usersCreateWithoutUserRoleInputSchema';
import { usersUncheckedCreateWithoutUserRoleInputSchema } from './usersUncheckedCreateWithoutUserRoleInputSchema';
import { usersCreateOrConnectWithoutUserRoleInputSchema } from './usersCreateOrConnectWithoutUserRoleInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';

export const usersCreateNestedOneWithoutUserRoleInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutUserRoleInput> = z.strictObject({
  create: z.union([ z.lazy(() => usersCreateWithoutUserRoleInputSchema), z.lazy(() => usersUncheckedCreateWithoutUserRoleInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutUserRoleInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
});

export default usersCreateNestedOneWithoutUserRoleInputSchema;
