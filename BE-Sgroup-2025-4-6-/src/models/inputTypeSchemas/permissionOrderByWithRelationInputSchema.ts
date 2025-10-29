import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { RolePermissionOrderByRelationAggregateInputSchema } from './RolePermissionOrderByRelationAggregateInputSchema';

export const permissionOrderByWithRelationInputSchema: z.ZodType<Prisma.permissionOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  permission: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  RolePermission: z.lazy(() => RolePermissionOrderByRelationAggregateInputSchema).optional(),
});

export default permissionOrderByWithRelationInputSchema;
