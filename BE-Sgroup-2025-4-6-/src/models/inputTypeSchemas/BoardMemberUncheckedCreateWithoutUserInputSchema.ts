import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BoardMemberUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.BoardMemberUncheckedCreateWithoutUserInput> = z.strictObject({
  id: z.uuid().optional(),
  boardId: z.string(),
  roleId: z.string(),
  joinedAt: z.coerce.date().optional(),
});

export default BoardMemberUncheckedCreateWithoutUserInputSchema;
