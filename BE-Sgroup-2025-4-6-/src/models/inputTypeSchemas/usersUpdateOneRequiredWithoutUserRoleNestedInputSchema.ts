import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutUserRoleInputSchema } from './usersCreateWithoutUserRoleInputSchema';
import { usersUncheckedCreateWithoutUserRoleInputSchema } from './usersUncheckedCreateWithoutUserRoleInputSchema';
import { usersCreateOrConnectWithoutUserRoleInputSchema } from './usersCreateOrConnectWithoutUserRoleInputSchema';
import { usersUpsertWithoutUserRoleInputSchema } from './usersUpsertWithoutUserRoleInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateToOneWithWhereWithoutUserRoleInputSchema } from './usersUpdateToOneWithWhereWithoutUserRoleInputSchema';
import { usersUpdateWithoutUserRoleInputSchema } from './usersUpdateWithoutUserRoleInputSchema';
import { usersUncheckedUpdateWithoutUserRoleInputSchema } from './usersUncheckedUpdateWithoutUserRoleInputSchema';

export const usersUpdateOneRequiredWithoutUserRoleNestedInputSchema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutUserRoleNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => usersCreateWithoutUserRoleInputSchema), z.lazy(() => usersUncheckedCreateWithoutUserRoleInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutUserRoleInputSchema).optional(),
  upsert: z.lazy(() => usersUpsertWithoutUserRoleInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => usersUpdateToOneWithWhereWithoutUserRoleInputSchema), z.lazy(() => usersUpdateWithoutUserRoleInputSchema), z.lazy(() => usersUncheckedUpdateWithoutUserRoleInputSchema) ]).optional(),
});

export default usersUpdateOneRequiredWithoutUserRoleNestedInputSchema;
