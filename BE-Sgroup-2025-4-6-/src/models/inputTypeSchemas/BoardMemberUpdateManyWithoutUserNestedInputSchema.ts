import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardMemberCreateWithoutUserInputSchema } from './BoardMemberCreateWithoutUserInputSchema';
import { BoardMemberUncheckedCreateWithoutUserInputSchema } from './BoardMemberUncheckedCreateWithoutUserInputSchema';
import { BoardMemberCreateOrConnectWithoutUserInputSchema } from './BoardMemberCreateOrConnectWithoutUserInputSchema';
import { BoardMemberUpsertWithWhereUniqueWithoutUserInputSchema } from './BoardMemberUpsertWithWhereUniqueWithoutUserInputSchema';
import { BoardMemberCreateManyUserInputEnvelopeSchema } from './BoardMemberCreateManyUserInputEnvelopeSchema';
import { BoardMemberWhereUniqueInputSchema } from './BoardMemberWhereUniqueInputSchema';
import { BoardMemberUpdateWithWhereUniqueWithoutUserInputSchema } from './BoardMemberUpdateWithWhereUniqueWithoutUserInputSchema';
import { BoardMemberUpdateManyWithWhereWithoutUserInputSchema } from './BoardMemberUpdateManyWithWhereWithoutUserInputSchema';
import { BoardMemberScalarWhereInputSchema } from './BoardMemberScalarWhereInputSchema';

export const BoardMemberUpdateManyWithoutUserNestedInputSchema: z.ZodType<Prisma.BoardMemberUpdateManyWithoutUserNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => BoardMemberCreateWithoutUserInputSchema), z.lazy(() => BoardMemberCreateWithoutUserInputSchema).array(), z.lazy(() => BoardMemberUncheckedCreateWithoutUserInputSchema), z.lazy(() => BoardMemberUncheckedCreateWithoutUserInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BoardMemberCreateOrConnectWithoutUserInputSchema), z.lazy(() => BoardMemberCreateOrConnectWithoutUserInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BoardMemberUpsertWithWhereUniqueWithoutUserInputSchema), z.lazy(() => BoardMemberUpsertWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BoardMemberCreateManyUserInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BoardMemberWhereUniqueInputSchema), z.lazy(() => BoardMemberWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BoardMemberWhereUniqueInputSchema), z.lazy(() => BoardMemberWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BoardMemberWhereUniqueInputSchema), z.lazy(() => BoardMemberWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BoardMemberWhereUniqueInputSchema), z.lazy(() => BoardMemberWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BoardMemberUpdateWithWhereUniqueWithoutUserInputSchema), z.lazy(() => BoardMemberUpdateWithWhereUniqueWithoutUserInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BoardMemberUpdateManyWithWhereWithoutUserInputSchema), z.lazy(() => BoardMemberUpdateManyWithWhereWithoutUserInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BoardMemberScalarWhereInputSchema), z.lazy(() => BoardMemberScalarWhereInputSchema).array() ]).optional(),
});

export default BoardMemberUpdateManyWithoutUserNestedInputSchema;
