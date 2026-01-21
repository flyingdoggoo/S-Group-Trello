import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardMemberCreateWithoutRoleInputSchema } from './BoardMemberCreateWithoutRoleInputSchema';
import { BoardMemberUncheckedCreateWithoutRoleInputSchema } from './BoardMemberUncheckedCreateWithoutRoleInputSchema';
import { BoardMemberCreateOrConnectWithoutRoleInputSchema } from './BoardMemberCreateOrConnectWithoutRoleInputSchema';
import { BoardMemberUpsertWithWhereUniqueWithoutRoleInputSchema } from './BoardMemberUpsertWithWhereUniqueWithoutRoleInputSchema';
import { BoardMemberCreateManyRoleInputEnvelopeSchema } from './BoardMemberCreateManyRoleInputEnvelopeSchema';
import { BoardMemberWhereUniqueInputSchema } from './BoardMemberWhereUniqueInputSchema';
import { BoardMemberUpdateWithWhereUniqueWithoutRoleInputSchema } from './BoardMemberUpdateWithWhereUniqueWithoutRoleInputSchema';
import { BoardMemberUpdateManyWithWhereWithoutRoleInputSchema } from './BoardMemberUpdateManyWithWhereWithoutRoleInputSchema';
import { BoardMemberScalarWhereInputSchema } from './BoardMemberScalarWhereInputSchema';

export const BoardMemberUncheckedUpdateManyWithoutRoleNestedInputSchema: z.ZodType<Prisma.BoardMemberUncheckedUpdateManyWithoutRoleNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => BoardMemberCreateWithoutRoleInputSchema), z.lazy(() => BoardMemberCreateWithoutRoleInputSchema).array(), z.lazy(() => BoardMemberUncheckedCreateWithoutRoleInputSchema), z.lazy(() => BoardMemberUncheckedCreateWithoutRoleInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BoardMemberCreateOrConnectWithoutRoleInputSchema), z.lazy(() => BoardMemberCreateOrConnectWithoutRoleInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BoardMemberUpsertWithWhereUniqueWithoutRoleInputSchema), z.lazy(() => BoardMemberUpsertWithWhereUniqueWithoutRoleInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BoardMemberCreateManyRoleInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BoardMemberWhereUniqueInputSchema), z.lazy(() => BoardMemberWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BoardMemberWhereUniqueInputSchema), z.lazy(() => BoardMemberWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BoardMemberWhereUniqueInputSchema), z.lazy(() => BoardMemberWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BoardMemberWhereUniqueInputSchema), z.lazy(() => BoardMemberWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BoardMemberUpdateWithWhereUniqueWithoutRoleInputSchema), z.lazy(() => BoardMemberUpdateWithWhereUniqueWithoutRoleInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BoardMemberUpdateManyWithWhereWithoutRoleInputSchema), z.lazy(() => BoardMemberUpdateManyWithWhereWithoutRoleInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BoardMemberScalarWhereInputSchema), z.lazy(() => BoardMemberScalarWhereInputSchema).array() ]).optional(),
});

export default BoardMemberUncheckedUpdateManyWithoutRoleNestedInputSchema;
