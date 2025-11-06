import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardCreateNestedOneWithoutBoardMemberInputSchema } from './BoardCreateNestedOneWithoutBoardMemberInputSchema';
import { usersCreateNestedOneWithoutBoardMemberInputSchema } from './usersCreateNestedOneWithoutBoardMemberInputSchema';
import { rolesCreateNestedOneWithoutBoardMemberInputSchema } from './rolesCreateNestedOneWithoutBoardMemberInputSchema';

export const BoardMemberCreateInputSchema: z.ZodType<Prisma.BoardMemberCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  joinedAt: z.coerce.date().optional(),
  board: z.lazy(() => BoardCreateNestedOneWithoutBoardMemberInputSchema),
  user: z.lazy(() => usersCreateNestedOneWithoutBoardMemberInputSchema),
  role: z.lazy(() => rolesCreateNestedOneWithoutBoardMemberInputSchema),
});

export default BoardMemberCreateInputSchema;
