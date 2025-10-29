import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { rolesCountOrderByAggregateInputSchema } from './rolesCountOrderByAggregateInputSchema';
import { rolesMaxOrderByAggregateInputSchema } from './rolesMaxOrderByAggregateInputSchema';
import { rolesMinOrderByAggregateInputSchema } from './rolesMinOrderByAggregateInputSchema';

export const rolesOrderByWithAggregationInputSchema: z.ZodType<Prisma.rolesOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  roleName: z.lazy(() => SortOrderSchema).optional(),
  desciption: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => rolesCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => rolesMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => rolesMinOrderByAggregateInputSchema).optional(),
});

export default rolesOrderByWithAggregationInputSchema;
