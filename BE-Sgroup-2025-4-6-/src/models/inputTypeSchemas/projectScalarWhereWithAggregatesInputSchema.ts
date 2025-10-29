import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';
import { EnumProjectStatusEnumWithAggregatesFilterSchema } from './EnumProjectStatusEnumWithAggregatesFilterSchema';
import { ProjectStatusEnumSchema } from './ProjectStatusEnumSchema';

export const projectScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.projectScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => projectScalarWhereWithAggregatesInputSchema), z.lazy(() => projectScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => projectScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => projectScalarWhereWithAggregatesInputSchema), z.lazy(() => projectScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date() ]).optional().nullable(),
  status: z.union([ z.lazy(() => EnumProjectStatusEnumWithAggregatesFilterSchema), z.lazy(() => ProjectStatusEnumSchema) ]).optional(),
});

export default projectScalarWhereWithAggregatesInputSchema;
