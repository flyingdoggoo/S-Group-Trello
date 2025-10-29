import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { RolePermissionCountOrderByAggregateInputSchema } from './RolePermissionCountOrderByAggregateInputSchema';
import { RolePermissionMaxOrderByAggregateInputSchema } from './RolePermissionMaxOrderByAggregateInputSchema';
import { RolePermissionMinOrderByAggregateInputSchema } from './RolePermissionMinOrderByAggregateInputSchema';

export const RolePermissionOrderByWithAggregationInputSchema: z.ZodType<Prisma.RolePermissionOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  roleId: z.lazy(() => SortOrderSchema).optional(),
  permissionId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => RolePermissionCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => RolePermissionMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => RolePermissionMinOrderByAggregateInputSchema).optional(),
});

export default RolePermissionOrderByWithAggregationInputSchema;
