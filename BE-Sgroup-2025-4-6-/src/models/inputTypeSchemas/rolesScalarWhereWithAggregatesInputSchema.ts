import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';

export const rolesScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.rolesScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => rolesScalarWhereWithAggregatesInputSchema), z.lazy(() => rolesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => rolesScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => rolesScalarWhereWithAggregatesInputSchema), z.lazy(() => rolesScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  roleName: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  desciption: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date() ]).optional().nullable(),
});

export default rolesScalarWhereWithAggregatesInputSchema;
