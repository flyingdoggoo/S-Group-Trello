import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardMemberCreateWithoutBoardInputSchema } from './BoardMemberCreateWithoutBoardInputSchema';
import { BoardMemberUncheckedCreateWithoutBoardInputSchema } from './BoardMemberUncheckedCreateWithoutBoardInputSchema';
import { BoardMemberCreateOrConnectWithoutBoardInputSchema } from './BoardMemberCreateOrConnectWithoutBoardInputSchema';
import { BoardMemberCreateManyBoardInputEnvelopeSchema } from './BoardMemberCreateManyBoardInputEnvelopeSchema';
import { BoardMemberWhereUniqueInputSchema } from './BoardMemberWhereUniqueInputSchema';

export const BoardMemberCreateNestedManyWithoutBoardInputSchema: z.ZodType<Prisma.BoardMemberCreateNestedManyWithoutBoardInput> = z.strictObject({
  create: z.union([ z.lazy(() => BoardMemberCreateWithoutBoardInputSchema), z.lazy(() => BoardMemberCreateWithoutBoardInputSchema).array(), z.lazy(() => BoardMemberUncheckedCreateWithoutBoardInputSchema), z.lazy(() => BoardMemberUncheckedCreateWithoutBoardInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BoardMemberCreateOrConnectWithoutBoardInputSchema), z.lazy(() => BoardMemberCreateOrConnectWithoutBoardInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BoardMemberCreateManyBoardInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => BoardMemberWhereUniqueInputSchema), z.lazy(() => BoardMemberWhereUniqueInputSchema).array() ]).optional(),
});

export default BoardMemberCreateNestedManyWithoutBoardInputSchema;
