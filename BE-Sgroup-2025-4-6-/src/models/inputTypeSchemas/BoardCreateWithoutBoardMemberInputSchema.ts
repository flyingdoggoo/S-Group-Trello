import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardStatusEnumSchema } from './BoardStatusEnumSchema';
import { projectCreateNestedOneWithoutBoardInputSchema } from './projectCreateNestedOneWithoutBoardInputSchema';
import { ListCreateNestedManyWithoutBoardInputSchema } from './ListCreateNestedManyWithoutBoardInputSchema';

export const BoardCreateWithoutBoardMemberInputSchema: z.ZodType<Prisma.BoardCreateWithoutBoardMemberInput> = z.strictObject({
  id: z.uuid().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  status: z.lazy(() => BoardStatusEnumSchema).optional(),
  coverUrl: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  project: z.lazy(() => projectCreateNestedOneWithoutBoardInputSchema),
  List: z.lazy(() => ListCreateNestedManyWithoutBoardInputSchema).optional(),
});

export default BoardCreateWithoutBoardMemberInputSchema;
