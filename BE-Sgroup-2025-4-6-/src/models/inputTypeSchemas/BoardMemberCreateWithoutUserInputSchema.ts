import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardCreateNestedOneWithoutBoardMemberInputSchema } from './BoardCreateNestedOneWithoutBoardMemberInputSchema';
import { rolesCreateNestedOneWithoutBoardMemberInputSchema } from './rolesCreateNestedOneWithoutBoardMemberInputSchema';

export const BoardMemberCreateWithoutUserInputSchema: z.ZodType<Prisma.BoardMemberCreateWithoutUserInput> = z.strictObject({
  id: z.uuid().optional(),
  joinedAt: z.coerce.date().optional(),
  board: z.lazy(() => BoardCreateNestedOneWithoutBoardMemberInputSchema),
  role: z.lazy(() => rolesCreateNestedOneWithoutBoardMemberInputSchema),
});

export default BoardMemberCreateWithoutUserInputSchema;
