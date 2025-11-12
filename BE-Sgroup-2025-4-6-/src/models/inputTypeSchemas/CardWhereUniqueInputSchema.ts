import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardWhereInputSchema } from './CardWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { EnumCardStatusEnumFilterSchema } from './EnumCardStatusEnumFilterSchema';
import { CardStatusEnumSchema } from './CardStatusEnumSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { ListScalarRelationFilterSchema } from './ListScalarRelationFilterSchema';
import { ListWhereInputSchema } from './ListWhereInputSchema';

export const CardWhereUniqueInputSchema: z.ZodType<Prisma.CardWhereUniqueInput> = z.object({
  id: z.uuid(),
})
.and(z.strictObject({
  id: z.uuid().optional(),
  AND: z.union([ z.lazy(() => CardWhereInputSchema), z.lazy(() => CardWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CardWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CardWhereInputSchema), z.lazy(() => CardWhereInputSchema).array() ]).optional(),
  listId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  description: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  position: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  status: z.union([ z.lazy(() => EnumCardStatusEnumFilterSchema), z.lazy(() => CardStatusEnumSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
  list: z.union([ z.lazy(() => ListScalarRelationFilterSchema), z.lazy(() => ListWhereInputSchema) ]).optional(),
}));

export default CardWhereUniqueInputSchema;
