import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';
import { DateTimeNullableWithAggregatesFilterSchema } from './DateTimeNullableWithAggregatesFilterSchema';

export const RolePermissionScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.RolePermissionScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => RolePermissionScalarWhereWithAggregatesInputSchema), z.lazy(() => RolePermissionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => RolePermissionScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RolePermissionScalarWhereWithAggregatesInputSchema), z.lazy(() => RolePermissionScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  roleId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  permissionId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableWithAggregatesFilterSchema), z.coerce.date() ]).optional().nullable(),
});

export default RolePermissionScalarWhereWithAggregatesInputSchema;
