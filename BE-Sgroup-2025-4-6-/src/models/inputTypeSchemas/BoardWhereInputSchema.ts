import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumBoardStatusEnumFilterSchema } from './EnumBoardStatusEnumFilterSchema';
import { BoardStatusEnumSchema } from './BoardStatusEnumSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { ProjectScalarRelationFilterSchema } from './ProjectScalarRelationFilterSchema';
import { projectWhereInputSchema } from './projectWhereInputSchema';
import { ListListRelationFilterSchema } from './ListListRelationFilterSchema';
import { InvitationsListRelationFilterSchema } from './InvitationsListRelationFilterSchema';
import { BoardMemberListRelationFilterSchema } from './BoardMemberListRelationFilterSchema';

export const BoardWhereInputSchema: z.ZodType<Prisma.BoardWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => BoardWhereInputSchema), z.lazy(() => BoardWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BoardWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BoardWhereInputSchema), z.lazy(() => BoardWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  projectId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => EnumBoardStatusEnumFilterSchema), z.lazy(() => BoardStatusEnumSchema) ]).optional(),
  coverUrl: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
  project: z.union([ z.lazy(() => ProjectScalarRelationFilterSchema), z.lazy(() => projectWhereInputSchema) ]).optional(),
  List: z.lazy(() => ListListRelationFilterSchema).optional(),
  invitation: z.lazy(() => InvitationsListRelationFilterSchema).optional(),
  BoardMember: z.lazy(() => BoardMemberListRelationFilterSchema).optional(),
});

export default BoardWhereInputSchema;
