import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardMemberScalarWhereInputSchema } from './BoardMemberScalarWhereInputSchema';
import { BoardMemberUpdateManyMutationInputSchema } from './BoardMemberUpdateManyMutationInputSchema';
import { BoardMemberUncheckedUpdateManyWithoutBoardInputSchema } from './BoardMemberUncheckedUpdateManyWithoutBoardInputSchema';

export const BoardMemberUpdateManyWithWhereWithoutBoardInputSchema: z.ZodType<Prisma.BoardMemberUpdateManyWithWhereWithoutBoardInput> = z.strictObject({
  where: z.lazy(() => BoardMemberScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BoardMemberUpdateManyMutationInputSchema), z.lazy(() => BoardMemberUncheckedUpdateManyWithoutBoardInputSchema) ]),
});

export default BoardMemberUpdateManyWithWhereWithoutBoardInputSchema;
