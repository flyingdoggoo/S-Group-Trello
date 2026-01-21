import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { CardScalarRelationFilterSchema } from './CardScalarRelationFilterSchema';
import { CardWhereInputSchema } from './CardWhereInputSchema';

export const CardTodoWhereInputSchema: z.ZodType<Prisma.CardTodoWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => CardTodoWhereInputSchema), z.lazy(() => CardTodoWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CardTodoWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CardTodoWhereInputSchema), z.lazy(() => CardTodoWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  cardId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  completed: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  position: z.union([ z.lazy(() => IntFilterSchema), z.number() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  card: z.union([ z.lazy(() => CardScalarRelationFilterSchema), z.lazy(() => CardWhereInputSchema) ]).optional(),
});

export default CardTodoWhereInputSchema;
