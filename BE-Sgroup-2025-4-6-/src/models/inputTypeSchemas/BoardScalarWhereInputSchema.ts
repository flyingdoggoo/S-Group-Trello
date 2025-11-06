import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumBoardStatusEnumFilterSchema } from './EnumBoardStatusEnumFilterSchema';
import { BoardStatusEnumSchema } from './BoardStatusEnumSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';

export const BoardScalarWhereInputSchema: z.ZodType<Prisma.BoardScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => BoardScalarWhereInputSchema), z.lazy(() => BoardScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => BoardScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BoardScalarWhereInputSchema), z.lazy(() => BoardScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  projectId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => EnumBoardStatusEnumFilterSchema), z.lazy(() => BoardStatusEnumSchema) ]).optional(),
  coverUrl: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
});

export default BoardScalarWhereInputSchema;
