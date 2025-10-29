import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { permissionOrderByWithRelationInputSchema } from './permissionOrderByWithRelationInputSchema';
import { rolesOrderByWithRelationInputSchema } from './rolesOrderByWithRelationInputSchema';

export const RolePermissionOrderByWithRelationInputSchema: z.ZodType<Prisma.RolePermissionOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  roleId: z.lazy(() => SortOrderSchema).optional(),
  permissionId: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  permission: z.lazy(() => permissionOrderByWithRelationInputSchema).optional(),
  role: z.lazy(() => rolesOrderByWithRelationInputSchema).optional(),
});

export default RolePermissionOrderByWithRelationInputSchema;
