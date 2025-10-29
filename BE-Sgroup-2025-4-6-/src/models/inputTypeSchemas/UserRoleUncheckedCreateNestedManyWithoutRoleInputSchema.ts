import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserRoleCreateWithoutRoleInputSchema } from './UserRoleCreateWithoutRoleInputSchema';
import { UserRoleUncheckedCreateWithoutRoleInputSchema } from './UserRoleUncheckedCreateWithoutRoleInputSchema';
import { UserRoleCreateOrConnectWithoutRoleInputSchema } from './UserRoleCreateOrConnectWithoutRoleInputSchema';
import { UserRoleCreateManyRoleInputEnvelopeSchema } from './UserRoleCreateManyRoleInputEnvelopeSchema';
import { UserRoleWhereUniqueInputSchema } from './UserRoleWhereUniqueInputSchema';

export const UserRoleUncheckedCreateNestedManyWithoutRoleInputSchema: z.ZodType<Prisma.UserRoleUncheckedCreateNestedManyWithoutRoleInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserRoleCreateWithoutRoleInputSchema), z.lazy(() => UserRoleCreateWithoutRoleInputSchema).array(), z.lazy(() => UserRoleUncheckedCreateWithoutRoleInputSchema), z.lazy(() => UserRoleUncheckedCreateWithoutRoleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserRoleCreateOrConnectWithoutRoleInputSchema), z.lazy(() => UserRoleCreateOrConnectWithoutRoleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserRoleCreateManyRoleInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema), z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
});

export default UserRoleUncheckedCreateNestedManyWithoutRoleInputSchema;
