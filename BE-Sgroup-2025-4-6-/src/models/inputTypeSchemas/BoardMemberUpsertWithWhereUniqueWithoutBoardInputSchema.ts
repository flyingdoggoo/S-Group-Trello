import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardMemberWhereUniqueInputSchema } from './BoardMemberWhereUniqueInputSchema';
import { BoardMemberUpdateWithoutBoardInputSchema } from './BoardMemberUpdateWithoutBoardInputSchema';
import { BoardMemberUncheckedUpdateWithoutBoardInputSchema } from './BoardMemberUncheckedUpdateWithoutBoardInputSchema';
import { BoardMemberCreateWithoutBoardInputSchema } from './BoardMemberCreateWithoutBoardInputSchema';
import { BoardMemberUncheckedCreateWithoutBoardInputSchema } from './BoardMemberUncheckedCreateWithoutBoardInputSchema';

export const BoardMemberUpsertWithWhereUniqueWithoutBoardInputSchema: z.ZodType<Prisma.BoardMemberUpsertWithWhereUniqueWithoutBoardInput> = z.strictObject({
  where: z.lazy(() => BoardMemberWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BoardMemberUpdateWithoutBoardInputSchema), z.lazy(() => BoardMemberUncheckedUpdateWithoutBoardInputSchema) ]),
  create: z.union([ z.lazy(() => BoardMemberCreateWithoutBoardInputSchema), z.lazy(() => BoardMemberUncheckedCreateWithoutBoardInputSchema) ]),
});

export default BoardMemberUpsertWithWhereUniqueWithoutBoardInputSchema;
