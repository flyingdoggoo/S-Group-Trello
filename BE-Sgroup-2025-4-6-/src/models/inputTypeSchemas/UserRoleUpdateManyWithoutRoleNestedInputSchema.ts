import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserRoleCreateWithoutRoleInputSchema } from './UserRoleCreateWithoutRoleInputSchema';
import { UserRoleUncheckedCreateWithoutRoleInputSchema } from './UserRoleUncheckedCreateWithoutRoleInputSchema';
import { UserRoleCreateOrConnectWithoutRoleInputSchema } from './UserRoleCreateOrConnectWithoutRoleInputSchema';
import { UserRoleUpsertWithWhereUniqueWithoutRoleInputSchema } from './UserRoleUpsertWithWhereUniqueWithoutRoleInputSchema';
import { UserRoleCreateManyRoleInputEnvelopeSchema } from './UserRoleCreateManyRoleInputEnvelopeSchema';
import { UserRoleWhereUniqueInputSchema } from './UserRoleWhereUniqueInputSchema';
import { UserRoleUpdateWithWhereUniqueWithoutRoleInputSchema } from './UserRoleUpdateWithWhereUniqueWithoutRoleInputSchema';
import { UserRoleUpdateManyWithWhereWithoutRoleInputSchema } from './UserRoleUpdateManyWithWhereWithoutRoleInputSchema';
import { UserRoleScalarWhereInputSchema } from './UserRoleScalarWhereInputSchema';

export const UserRoleUpdateManyWithoutRoleNestedInputSchema: z.ZodType<Prisma.UserRoleUpdateManyWithoutRoleNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => UserRoleCreateWithoutRoleInputSchema), z.lazy(() => UserRoleCreateWithoutRoleInputSchema).array(), z.lazy(() => UserRoleUncheckedCreateWithoutRoleInputSchema), z.lazy(() => UserRoleUncheckedCreateWithoutRoleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => UserRoleCreateOrConnectWithoutRoleInputSchema), z.lazy(() => UserRoleCreateOrConnectWithoutRoleInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => UserRoleUpsertWithWhereUniqueWithoutRoleInputSchema), z.lazy(() => UserRoleUpsertWithWhereUniqueWithoutRoleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => UserRoleCreateManyRoleInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema), z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema), z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema), z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => UserRoleWhereUniqueInputSchema), z.lazy(() => UserRoleWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => UserRoleUpdateWithWhereUniqueWithoutRoleInputSchema), z.lazy(() => UserRoleUpdateWithWhereUniqueWithoutRoleInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => UserRoleUpdateManyWithWhereWithoutRoleInputSchema), z.lazy(() => UserRoleUpdateManyWithWhereWithoutRoleInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => UserRoleScalarWhereInputSchema), z.lazy(() => UserRoleScalarWhereInputSchema).array() ]).optional(),
});

export default UserRoleUpdateManyWithoutRoleNestedInputSchema;
