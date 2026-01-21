import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { EnumListStatusEnumWithAggregatesFilterSchema } from './EnumListStatusEnumWithAggregatesFilterSchema';
import { ListStatusEnumSchema } from './ListStatusEnumSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';

export const ListScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.ListScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ListScalarWhereWithAggregatesInputSchema), z.lazy(() => ListScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => ListScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ListScalarWhereWithAggregatesInputSchema), z.lazy(() => ListScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  boardId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  position: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  status: z.union([ z.lazy(() => EnumListStatusEnumWithAggregatesFilterSchema), z.lazy(() => ListStatusEnumSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date() ]).optional().nullable(),
});

export default ListScalarWhereWithAggregatesInputSchema;
