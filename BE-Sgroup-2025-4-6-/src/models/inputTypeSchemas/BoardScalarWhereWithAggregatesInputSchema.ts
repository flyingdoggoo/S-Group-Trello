import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { EnumBoardStatusEnumWithAggregatesFilterSchema } from './EnumBoardStatusEnumWithAggregatesFilterSchema';
import { BoardStatusEnumSchema } from './BoardStatusEnumSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';

export const BoardScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.BoardScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => BoardScalarWhereWithAggregatesInputSchema), z.lazy(() => BoardScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => BoardScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => BoardScalarWhereWithAggregatesInputSchema), z.lazy(() => BoardScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  projectId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  status: z.union([ z.lazy(() => EnumBoardStatusEnumWithAggregatesFilterSchema), z.lazy(() => BoardStatusEnumSchema) ]).optional(),
  coverUrl: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date() ]).optional().nullable(),
});

export default BoardScalarWhereWithAggregatesInputSchema;
