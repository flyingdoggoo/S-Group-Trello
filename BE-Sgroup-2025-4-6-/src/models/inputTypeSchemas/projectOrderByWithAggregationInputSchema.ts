import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { projectCountOrderByAggregateInputSchema } from './projectCountOrderByAggregateInputSchema';
import { projectMaxOrderByAggregateInputSchema } from './projectMaxOrderByAggregateInputSchema';
import { projectMinOrderByAggregateInputSchema } from './projectMinOrderByAggregateInputSchema';

export const projectOrderByWithAggregationInputSchema: z.ZodType<Prisma.projectOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => projectCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => projectMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => projectMinOrderByAggregateInputSchema).optional(),
});

export default projectOrderByWithAggregationInputSchema;
