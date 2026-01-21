import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardUpdateWithoutBoardMemberInputSchema } from './BoardUpdateWithoutBoardMemberInputSchema';
import { BoardUncheckedUpdateWithoutBoardMemberInputSchema } from './BoardUncheckedUpdateWithoutBoardMemberInputSchema';
import { BoardCreateWithoutBoardMemberInputSchema } from './BoardCreateWithoutBoardMemberInputSchema';
import { BoardUncheckedCreateWithoutBoardMemberInputSchema } from './BoardUncheckedCreateWithoutBoardMemberInputSchema';
import { BoardWhereInputSchema } from './BoardWhereInputSchema';

export const BoardUpsertWithoutBoardMemberInputSchema: z.ZodType<Prisma.BoardUpsertWithoutBoardMemberInput> = z.strictObject({
  update: z.union([ z.lazy(() => BoardUpdateWithoutBoardMemberInputSchema), z.lazy(() => BoardUncheckedUpdateWithoutBoardMemberInputSchema) ]),
  create: z.union([ z.lazy(() => BoardCreateWithoutBoardMemberInputSchema), z.lazy(() => BoardUncheckedCreateWithoutBoardMemberInputSchema) ]),
  where: z.lazy(() => BoardWhereInputSchema).optional(),
});

export default BoardUpsertWithoutBoardMemberInputSchema;
