import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardTodoWhereInputSchema } from './CardTodoWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { IntFilterSchema } from './IntFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { CardScalarRelationFilterSchema } from './CardScalarRelationFilterSchema';
import { CardWhereInputSchema } from './CardWhereInputSchema';

export const CardTodoWhereUniqueInputSchema: z.ZodType<Prisma.CardTodoWhereUniqueInput> = z.object({
  id: z.uuid(),
})
.and(z.strictObject({
  id: z.uuid().optional(),
  AND: z.union([ z.lazy(() => CardTodoWhereInputSchema), z.lazy(() => CardTodoWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CardTodoWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CardTodoWhereInputSchema), z.lazy(() => CardTodoWhereInputSchema).array() ]).optional(),
  cardId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  completed: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  position: z.union([ z.lazy(() => IntFilterSchema), z.number().int() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  card: z.union([ z.lazy(() => CardScalarRelationFilterSchema), z.lazy(() => CardWhereInputSchema) ]).optional(),
}));

export default CardTodoWhereUniqueInputSchema;
