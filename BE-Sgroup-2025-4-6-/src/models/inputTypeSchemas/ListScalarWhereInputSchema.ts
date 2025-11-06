import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';

export const ListScalarWhereInputSchema: z.ZodType<Prisma.ListScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ListScalarWhereInputSchema), z.lazy(() => ListScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ListScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ListScalarWhereInputSchema), z.lazy(() => ListScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  boardId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  position: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
});

export default ListScalarWhereInputSchema;
