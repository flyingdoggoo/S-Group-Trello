import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const BoardMemberCreateManyUserInputSchema: z.ZodType<Prisma.BoardMemberCreateManyUserInput> = z.strictObject({
  id: z.uuid().optional(),
  boardId: z.string(),
  roleId: z.string(),
  joinedAt: z.coerce.date().optional(),
});

export default BoardMemberCreateManyUserInputSchema;
