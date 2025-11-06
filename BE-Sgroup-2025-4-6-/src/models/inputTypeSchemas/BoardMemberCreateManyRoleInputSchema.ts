import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BoardMemberCreateManyRoleInputSchema: z.ZodType<Prisma.BoardMemberCreateManyRoleInput> = z.strictObject({
  id: z.uuid().optional(),
  boardId: z.string(),
  userId: z.string(),
  joinedAt: z.coerce.date().optional(),
});

export default BoardMemberCreateManyRoleInputSchema;
