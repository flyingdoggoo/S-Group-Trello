import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ListCountOrderByAggregateInputSchema } from './ListCountOrderByAggregateInputSchema';
import { ListAvgOrderByAggregateInputSchema } from './ListAvgOrderByAggregateInputSchema';
import { ListMaxOrderByAggregateInputSchema } from './ListMaxOrderByAggregateInputSchema';
import { ListMinOrderByAggregateInputSchema } from './ListMinOrderByAggregateInputSchema';
import { ListSumOrderByAggregateInputSchema } from './ListSumOrderByAggregateInputSchema';

export const ListOrderByWithAggregationInputSchema: z.ZodType<Prisma.ListOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  boardId: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => ListCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => ListAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => ListMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => ListMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => ListSumOrderByAggregateInputSchema).optional(),
});

export default ListOrderByWithAggregationInputSchema;
