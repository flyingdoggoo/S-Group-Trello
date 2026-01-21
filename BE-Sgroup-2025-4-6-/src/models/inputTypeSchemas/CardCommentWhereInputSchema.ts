import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { CardScalarRelationFilterSchema } from './CardScalarRelationFilterSchema';
import { CardWhereInputSchema } from './CardWhereInputSchema';
import { UsersScalarRelationFilterSchema } from './UsersScalarRelationFilterSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const CardCommentWhereInputSchema: z.ZodType<Prisma.CardCommentWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => CardCommentWhereInputSchema), z.lazy(() => CardCommentWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CardCommentWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CardCommentWhereInputSchema), z.lazy(() => CardCommentWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  cardId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  card: z.union([ z.lazy(() => CardScalarRelationFilterSchema), z.lazy(() => CardWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UsersScalarRelationFilterSchema), z.lazy(() => usersWhereInputSchema) ]).optional(),
});

export default CardCommentWhereInputSchema;
