import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { CardCommentCountOrderByAggregateInputSchema } from './CardCommentCountOrderByAggregateInputSchema';
import { CardCommentMaxOrderByAggregateInputSchema } from './CardCommentMaxOrderByAggregateInputSchema';
import { CardCommentMinOrderByAggregateInputSchema } from './CardCommentMinOrderByAggregateInputSchema';

export const CardCommentOrderByWithAggregationInputSchema: z.ZodType<Prisma.CardCommentOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  cardId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CardCommentCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CardCommentMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CardCommentMinOrderByAggregateInputSchema).optional(),
});

export default CardCommentOrderByWithAggregationInputSchema;
