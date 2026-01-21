import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const CardCommentScalarWhereInputSchema: z.ZodType<Prisma.CardCommentScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => CardCommentScalarWhereInputSchema), z.lazy(() => CardCommentScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CardCommentScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CardCommentScalarWhereInputSchema), z.lazy(() => CardCommentScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  cardId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
});

export default CardCommentScalarWhereInputSchema;
