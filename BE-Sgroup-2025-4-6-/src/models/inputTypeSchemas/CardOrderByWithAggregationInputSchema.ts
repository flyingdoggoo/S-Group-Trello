import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { CardCountOrderByAggregateInputSchema } from './CardCountOrderByAggregateInputSchema';
import { CardAvgOrderByAggregateInputSchema } from './CardAvgOrderByAggregateInputSchema';
import { CardMaxOrderByAggregateInputSchema } from './CardMaxOrderByAggregateInputSchema';
import { CardMinOrderByAggregateInputSchema } from './CardMinOrderByAggregateInputSchema';
import { CardSumOrderByAggregateInputSchema } from './CardSumOrderByAggregateInputSchema';

export const CardOrderByWithAggregationInputSchema: z.ZodType<Prisma.CardOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  listId: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => CardCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CardAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CardMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CardMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CardSumOrderByAggregateInputSchema).optional(),
});

export default CardOrderByWithAggregationInputSchema;
