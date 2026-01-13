import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardStatusEnumSchema } from './BoardStatusEnumSchema';
import { projectCreateNestedOneWithoutBoardInputSchema } from './projectCreateNestedOneWithoutBoardInputSchema';
import { ListCreateNestedManyWithoutBoardInputSchema } from './ListCreateNestedManyWithoutBoardInputSchema';
import { InvitationsCreateNestedManyWithoutBoardInputSchema } from './InvitationsCreateNestedManyWithoutBoardInputSchema';
import { BoardMemberCreateNestedManyWithoutBoardInputSchema } from './BoardMemberCreateNestedManyWithoutBoardInputSchema';

export const BoardCreateInputSchema: z.ZodType<Prisma.BoardCreateInput> = z.strictObject({
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
  invitation: z.lazy(() => InvitationsCreateNestedManyWithoutBoardInputSchema).optional(),
  BoardMember: z.lazy(() => BoardMemberCreateNestedManyWithoutBoardInputSchema).optional(),
});

export default BoardCreateInputSchema;
