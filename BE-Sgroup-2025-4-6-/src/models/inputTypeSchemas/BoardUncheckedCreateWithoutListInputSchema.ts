import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardStatusEnumSchema } from './BoardStatusEnumSchema';
import { BoardMemberUncheckedCreateNestedManyWithoutBoardInputSchema } from './BoardMemberUncheckedCreateNestedManyWithoutBoardInputSchema';

export const BoardUncheckedCreateWithoutListInputSchema: z.ZodType<Prisma.BoardUncheckedCreateWithoutListInput> = z.strictObject({
  id: z.uuid().optional(),
  projectId: z.string(),
  title: z.string(),
  description: z.string().optional().nullable(),
  status: z.lazy(() => BoardStatusEnumSchema).optional(),
  coverUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  BoardMember: z.lazy(() => BoardMemberUncheckedCreateNestedManyWithoutBoardInputSchema).optional(),
});

export default BoardUncheckedCreateWithoutListInputSchema;
