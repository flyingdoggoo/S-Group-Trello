import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const CardCommentScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CardCommentScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => CardCommentScalarWhereWithAggregatesInputSchema), z.lazy(() => CardCommentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CardCommentScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CardCommentScalarWhereWithAggregatesInputSchema), z.lazy(() => CardCommentScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  cardId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  content: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export default CardCommentScalarWhereWithAggregatesInputSchema;
