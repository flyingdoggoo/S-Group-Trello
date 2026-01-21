import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BoardMemberCreateManyInputSchema: z.ZodType<Prisma.BoardMemberCreateManyInput> = z.strictObject({
  id: z.uuid().optional(),
  boardId: z.string(),
  userId: z.string(),
  roleId: z.string(),
  joinedAt: z.coerce.date().optional(),
});

export default BoardMemberCreateManyInputSchema;
