import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { StringNullableWithAggregatesFilterSchema } from './StringNullableWithAggregatesFilterSchema';
import { IntWithAggregatesFilterSchema } from './IntWithAggregatesFilterSchema';
import { EnumCardStatusEnumWithAggregatesFilterSchema } from './EnumCardStatusEnumWithAggregatesFilterSchema';
import { CardStatusEnumSchema } from './CardStatusEnumSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';

export const CardScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CardScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => CardScalarWhereWithAggregatesInputSchema), z.lazy(() => CardScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CardScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CardScalarWhereWithAggregatesInputSchema), z.lazy(() => CardScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  listId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableWithAggregatesFilterSchema), z.string() ]).optional().nullable(),
  position: z.union([ z.lazy(() => IntWithAggregatesFilterSchema), z.number() ]).optional(),
  status: z.union([ z.lazy(() => EnumCardStatusEnumWithAggregatesFilterSchema), z.lazy(() => CardStatusEnumSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date() ]).optional().nullable(),
});

export default CardScalarWhereWithAggregatesInputSchema;
