import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardStatusEnumSchema } from './BoardStatusEnumSchema';
import { ListUncheckedCreateNestedManyWithoutBoardInputSchema } from './ListUncheckedCreateNestedManyWithoutBoardInputSchema';

export const BoardUncheckedCreateWithoutBoardMemberInputSchema: z.ZodType<Prisma.BoardUncheckedCreateWithoutBoardMemberInput> = z.strictObject({
  id: z.uuid().optional(),
  projectId: z.string(),
  title: z.string(),
  description: z.string().optional().nullable(),
  status: z.lazy(() => BoardStatusEnumSchema).optional(),
  coverUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  List: z.lazy(() => ListUncheckedCreateNestedManyWithoutBoardInputSchema).optional(),
});

export default BoardUncheckedCreateWithoutBoardMemberInputSchema;
