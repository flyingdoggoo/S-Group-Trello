import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { permissionCountOrderByAggregateInputSchema } from './permissionCountOrderByAggregateInputSchema';
import { permissionMaxOrderByAggregateInputSchema } from './permissionMaxOrderByAggregateInputSchema';
import { permissionMinOrderByAggregateInputSchema } from './permissionMinOrderByAggregateInputSchema';

export const permissionOrderByWithAggregationInputSchema: z.ZodType<Prisma.permissionOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  permission: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => permissionCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => permissionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => permissionMinOrderByAggregateInputSchema).optional(),
});

export default permissionOrderByWithAggregationInputSchema;
