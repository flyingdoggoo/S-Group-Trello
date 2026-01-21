import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BoardMemberCreateManyBoardInputSchema: z.ZodType<Prisma.BoardMemberCreateManyBoardInput> = z.strictObject({
  id: z.uuid().optional(),
  userId: z.string(),
  roleId: z.string(),
  joinedAt: z.coerce.date().optional(),
});

export default BoardMemberCreateManyBoardInputSchema;
