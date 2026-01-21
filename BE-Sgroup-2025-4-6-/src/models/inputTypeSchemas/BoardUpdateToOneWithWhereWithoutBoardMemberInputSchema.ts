import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardWhereInputSchema } from './BoardWhereInputSchema';
import { BoardUpdateWithoutBoardMemberInputSchema } from './BoardUpdateWithoutBoardMemberInputSchema';
import { BoardUncheckedUpdateWithoutBoardMemberInputSchema } from './BoardUncheckedUpdateWithoutBoardMemberInputSchema';

export const BoardUpdateToOneWithWhereWithoutBoardMemberInputSchema: z.ZodType<Prisma.BoardUpdateToOneWithWhereWithoutBoardMemberInput> = z.strictObject({
  where: z.lazy(() => BoardWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BoardUpdateWithoutBoardMemberInputSchema), z.lazy(() => BoardUncheckedUpdateWithoutBoardMemberInputSchema) ]),
});

export default BoardUpdateToOneWithWhereWithoutBoardMemberInputSchema;
