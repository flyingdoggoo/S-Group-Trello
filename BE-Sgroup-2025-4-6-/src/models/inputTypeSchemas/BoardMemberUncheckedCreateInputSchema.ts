import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BoardMemberUncheckedCreateInputSchema: z.ZodType<Prisma.BoardMemberUncheckedCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  boardId: z.string(),
  userId: z.string(),
  roleId: z.string(),
  joinedAt: z.coerce.date().optional(),
});

export default BoardMemberUncheckedCreateInputSchema;
