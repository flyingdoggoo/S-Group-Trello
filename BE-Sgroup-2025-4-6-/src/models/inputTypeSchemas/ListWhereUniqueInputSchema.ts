import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ListWhereInputSchema } from './ListWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { EnumListStatusEnumFilterSchema } from './EnumListStatusEnumFilterSchema';
import { ListStatusEnumSchema } from './ListStatusEnumSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { BoardScalarRelationFilterSchema } from './BoardScalarRelationFilterSchema';
import { BoardWhereInputSchema } from './BoardWhereInputSchema';
import { CardListRelationFilterSchema } from './CardListRelationFilterSchema';

export const ListWhereUniqueInputSchema: z.ZodType<Prisma.ListWhereUniqueInput> = z.object({
  id: z.uuid(),
})
.and(z.strictObject({
  id: z.uuid().optional(),
  AND: z.union([ z.lazy(() => ListWhereInputSchema), z.lazy(() => ListWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ListWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ListWhereInputSchema), z.lazy(() => ListWhereInputSchema).array() ]).optional(),
  boardId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  position: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  status: z.union([ z.lazy(() => EnumListStatusEnumFilterSchema), z.lazy(() => ListStatusEnumSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
  board: z.union([ z.lazy(() => BoardScalarRelationFilterSchema), z.lazy(() => BoardWhereInputSchema) ]).optional(),
  Card: z.lazy(() => CardListRelationFilterSchema).optional(),
}));

export default ListWhereUniqueInputSchema;
