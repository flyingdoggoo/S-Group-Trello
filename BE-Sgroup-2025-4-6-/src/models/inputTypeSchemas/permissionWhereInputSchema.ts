import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { RolePermissionListRelationFilterSchema } from './RolePermissionListRelationFilterSchema';

export const permissionWhereInputSchema: z.ZodType<Prisma.permissionWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => permissionWhereInputSchema), z.lazy(() => permissionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => permissionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => permissionWhereInputSchema), z.lazy(() => permissionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  permission: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
  RolePermission: z.lazy(() => RolePermissionListRelationFilterSchema).optional(),
});

export default permissionWhereInputSchema;
