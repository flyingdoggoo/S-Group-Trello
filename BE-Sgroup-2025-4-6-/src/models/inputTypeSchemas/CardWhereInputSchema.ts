import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { ListScalarRelationFilterSchema } from './ListScalarRelationFilterSchema';
import { ListWhereInputSchema } from './ListWhereInputSchema';

export const CardWhereInputSchema: z.ZodType<Prisma.CardWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => CardWhereInputSchema), z.lazy(() => CardWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CardWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CardWhereInputSchema), z.lazy(() => CardWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  listId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  position: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
  list: z.union([ z.lazy(() => ListScalarRelationFilterSchema), z.lazy(() => ListWhereInputSchema) ]).optional(),
});

export default CardWhereInputSchema;
