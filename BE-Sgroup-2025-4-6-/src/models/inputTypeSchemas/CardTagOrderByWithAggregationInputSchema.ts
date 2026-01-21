import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { CardTagCountOrderByAggregateInputSchema } from './CardTagCountOrderByAggregateInputSchema';
import { CardTagMaxOrderByAggregateInputSchema } from './CardTagMaxOrderByAggregateInputSchema';
import { CardTagMinOrderByAggregateInputSchema } from './CardTagMinOrderByAggregateInputSchema';

export const CardTagOrderByWithAggregationInputSchema: z.ZodType<Prisma.CardTagOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  cardId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  color: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CardTagCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CardTagMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CardTagMinOrderByAggregateInputSchema).optional(),
});

export default CardTagOrderByWithAggregationInputSchema;
