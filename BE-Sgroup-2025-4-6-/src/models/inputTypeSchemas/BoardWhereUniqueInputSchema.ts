import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardWhereInputSchema } from './BoardWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumBoardStatusEnumFilterSchema } from './EnumBoardStatusEnumFilterSchema';
import { BoardStatusEnumSchema } from './BoardStatusEnumSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { ProjectScalarRelationFilterSchema } from './ProjectScalarRelationFilterSchema';
import { projectWhereInputSchema } from './projectWhereInputSchema';
import { ListListRelationFilterSchema } from './ListListRelationFilterSchema';
import { BoardMemberListRelationFilterSchema } from './BoardMemberListRelationFilterSchema';

export const BoardWhereUniqueInputSchema: z.ZodType<Prisma.BoardWhereUniqueInput> = z.object({
  id: z.uuid(),
})
.and(z.strictObject({
  id: z.uuid().optional(),
  AND: z.union([ z.lazy(() => BoardWhereInputSchema), z.lazy(() => BoardWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BoardWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BoardWhereInputSchema), z.lazy(() => BoardWhereInputSchema).array() ]).optional(),
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
  BoardMember: z.lazy(() => BoardMemberListRelationFilterSchema).optional(),
}));

export default BoardWhereUniqueInputSchema;
