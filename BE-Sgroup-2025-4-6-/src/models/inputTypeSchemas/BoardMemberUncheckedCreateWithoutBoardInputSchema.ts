import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BoardMemberUncheckedCreateWithoutBoardInputSchema: z.ZodType<Prisma.BoardMemberUncheckedCreateWithoutBoardInput> = z.strictObject({
  id: z.uuid().optional(),
  userId: z.string(),
  roleId: z.string(),
  joinedAt: z.coerce.date().optional(),
});

export default BoardMemberUncheckedCreateWithoutBoardInputSchema;
