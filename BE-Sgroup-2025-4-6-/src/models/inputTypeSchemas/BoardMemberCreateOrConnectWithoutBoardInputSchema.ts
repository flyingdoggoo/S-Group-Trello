import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardMemberWhereUniqueInputSchema } from './BoardMemberWhereUniqueInputSchema';
import { BoardMemberCreateWithoutBoardInputSchema } from './BoardMemberCreateWithoutBoardInputSchema';
import { BoardMemberUncheckedCreateWithoutBoardInputSchema } from './BoardMemberUncheckedCreateWithoutBoardInputSchema';

export const BoardMemberCreateOrConnectWithoutBoardInputSchema: z.ZodType<Prisma.BoardMemberCreateOrConnectWithoutBoardInput> = z.strictObject({
  where: z.lazy(() => BoardMemberWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => BoardMemberCreateWithoutBoardInputSchema), z.lazy(() => BoardMemberUncheckedCreateWithoutBoardInputSchema) ]),
});

export default BoardMemberCreateOrConnectWithoutBoardInputSchema;
