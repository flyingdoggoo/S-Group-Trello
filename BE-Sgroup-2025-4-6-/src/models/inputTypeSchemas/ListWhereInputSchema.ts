import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { BoardScalarRelationFilterSchema } from './BoardScalarRelationFilterSchema';
import { BoardWhereInputSchema } from './BoardWhereInputSchema';
import { CardListRelationFilterSchema } from './CardListRelationFilterSchema';

export const ListWhereInputSchema: z.ZodType<Prisma.ListWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => ListWhereInputSchema), z.lazy(() => ListWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => ListWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => ListWhereInputSchema), z.lazy(() => ListWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  boardId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  position: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
  board: z.union([ z.lazy(() => BoardScalarRelationFilterSchema), z.lazy(() => BoardWhereInputSchema) ]).optional(),
  Card: z.lazy(() => CardListRelationFilterSchema).optional(),
});

export default ListWhereInputSchema;
