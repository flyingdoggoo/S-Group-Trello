import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { BoardCountOrderByAggregateInputSchema } from './BoardCountOrderByAggregateInputSchema';
import { BoardMaxOrderByAggregateInputSchema } from './BoardMaxOrderByAggregateInputSchema';
import { BoardMinOrderByAggregateInputSchema } from './BoardMinOrderByAggregateInputSchema';

export const BoardOrderByWithAggregationInputSchema: z.ZodType<Prisma.BoardOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  coverUrl: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => BoardCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BoardMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BoardMinOrderByAggregateInputSchema).optional(),
});

export default BoardOrderByWithAggregationInputSchema;
