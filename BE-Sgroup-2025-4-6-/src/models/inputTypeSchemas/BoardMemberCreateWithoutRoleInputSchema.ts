import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardCreateNestedOneWithoutBoardMemberInputSchema } from './BoardCreateNestedOneWithoutBoardMemberInputSchema';
import { usersCreateNestedOneWithoutBoardMemberInputSchema } from './usersCreateNestedOneWithoutBoardMemberInputSchema';

export const BoardMemberCreateWithoutRoleInputSchema: z.ZodType<Prisma.BoardMemberCreateWithoutRoleInput> = z.strictObject({
  id: z.uuid().optional(),
  joinedAt: z.coerce.date().optional(),
  board: z.lazy(() => BoardCreateNestedOneWithoutBoardMemberInputSchema),
  user: z.lazy(() => usersCreateNestedOneWithoutBoardMemberInputSchema),
});

export default BoardMemberCreateWithoutRoleInputSchema;
