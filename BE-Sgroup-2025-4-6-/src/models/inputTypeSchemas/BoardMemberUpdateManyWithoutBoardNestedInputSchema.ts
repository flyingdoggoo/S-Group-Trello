import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardMemberCreateWithoutBoardInputSchema } from './BoardMemberCreateWithoutBoardInputSchema';
import { BoardMemberUncheckedCreateWithoutBoardInputSchema } from './BoardMemberUncheckedCreateWithoutBoardInputSchema';
import { BoardMemberCreateOrConnectWithoutBoardInputSchema } from './BoardMemberCreateOrConnectWithoutBoardInputSchema';
import { BoardMemberUpsertWithWhereUniqueWithoutBoardInputSchema } from './BoardMemberUpsertWithWhereUniqueWithoutBoardInputSchema';
import { BoardMemberCreateManyBoardInputEnvelopeSchema } from './BoardMemberCreateManyBoardInputEnvelopeSchema';
import { BoardMemberWhereUniqueInputSchema } from './BoardMemberWhereUniqueInputSchema';
import { BoardMemberUpdateWithWhereUniqueWithoutBoardInputSchema } from './BoardMemberUpdateWithWhereUniqueWithoutBoardInputSchema';
import { BoardMemberUpdateManyWithWhereWithoutBoardInputSchema } from './BoardMemberUpdateManyWithWhereWithoutBoardInputSchema';
import { BoardMemberScalarWhereInputSchema } from './BoardMemberScalarWhereInputSchema';

export const BoardMemberUpdateManyWithoutBoardNestedInputSchema: z.ZodType<Prisma.BoardMemberUpdateManyWithoutBoardNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => BoardMemberCreateWithoutBoardInputSchema), z.lazy(() => BoardMemberCreateWithoutBoardInputSchema).array(), z.lazy(() => BoardMemberUncheckedCreateWithoutBoardInputSchema), z.lazy(() => BoardMemberUncheckedCreateWithoutBoardInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BoardMemberCreateOrConnectWithoutBoardInputSchema), z.lazy(() => BoardMemberCreateOrConnectWithoutBoardInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BoardMemberUpsertWithWhereUniqueWithoutBoardInputSchema), z.lazy(() => BoardMemberUpsertWithWhereUniqueWithoutBoardInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BoardMemberCreateManyBoardInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BoardMemberWhereUniqueInputSchema), z.lazy(() => BoardMemberWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BoardMemberWhereUniqueInputSchema), z.lazy(() => BoardMemberWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BoardMemberWhereUniqueInputSchema), z.lazy(() => BoardMemberWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BoardMemberWhereUniqueInputSchema), z.lazy(() => BoardMemberWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BoardMemberUpdateWithWhereUniqueWithoutBoardInputSchema), z.lazy(() => BoardMemberUpdateWithWhereUniqueWithoutBoardInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BoardMemberUpdateManyWithWhereWithoutBoardInputSchema), z.lazy(() => BoardMemberUpdateManyWithWhereWithoutBoardInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BoardMemberScalarWhereInputSchema), z.lazy(() => BoardMemberScalarWhereInputSchema).array() ]).optional(),
});

export default BoardMemberUpdateManyWithoutBoardNestedInputSchema;
