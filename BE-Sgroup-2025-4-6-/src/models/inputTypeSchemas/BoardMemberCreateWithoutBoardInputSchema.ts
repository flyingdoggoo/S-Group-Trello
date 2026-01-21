import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateNestedOneWithoutBoardMemberInputSchema } from './usersCreateNestedOneWithoutBoardMemberInputSchema';
import { rolesCreateNestedOneWithoutBoardMemberInputSchema } from './rolesCreateNestedOneWithoutBoardMemberInputSchema';

export const BoardMemberCreateWithoutBoardInputSchema: z.ZodType<Prisma.BoardMemberCreateWithoutBoardInput> = z.strictObject({
  id: z.uuid().optional(),
  joinedAt: z.coerce.date().optional(),
  user: z.lazy(() => usersCreateNestedOneWithoutBoardMemberInputSchema),
  role: z.lazy(() => rolesCreateNestedOneWithoutBoardMemberInputSchema),
});

export default BoardMemberCreateWithoutBoardInputSchema;
