import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardMemberWhereUniqueInputSchema } from './BoardMemberWhereUniqueInputSchema';
import { BoardMemberUpdateWithoutBoardInputSchema } from './BoardMemberUpdateWithoutBoardInputSchema';
import { BoardMemberUncheckedUpdateWithoutBoardInputSchema } from './BoardMemberUncheckedUpdateWithoutBoardInputSchema';

export const BoardMemberUpdateWithWhereUniqueWithoutBoardInputSchema: z.ZodType<Prisma.BoardMemberUpdateWithWhereUniqueWithoutBoardInput> = z.strictObject({
  where: z.lazy(() => BoardMemberWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BoardMemberUpdateWithoutBoardInputSchema), z.lazy(() => BoardMemberUncheckedUpdateWithoutBoardInputSchema) ]),
});

export default BoardMemberUpdateWithWhereUniqueWithoutBoardInputSchema;
