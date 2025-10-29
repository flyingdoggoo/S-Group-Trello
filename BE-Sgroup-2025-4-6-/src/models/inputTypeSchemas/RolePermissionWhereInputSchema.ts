import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { PermissionScalarRelationFilterSchema } from './PermissionScalarRelationFilterSchema';
import { permissionWhereInputSchema } from './permissionWhereInputSchema';
import { RolesScalarRelationFilterSchema } from './RolesScalarRelationFilterSchema';
import { rolesWhereInputSchema } from './rolesWhereInputSchema';

export const RolePermissionWhereInputSchema: z.ZodType<Prisma.RolePermissionWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => RolePermissionWhereInputSchema), z.lazy(() => RolePermissionWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => RolePermissionWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => RolePermissionWhereInputSchema), z.lazy(() => RolePermissionWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  roleId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  permissionId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
  permission: z.union([ z.lazy(() => PermissionScalarRelationFilterSchema), z.lazy(() => permissionWhereInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RolesScalarRelationFilterSchema), z.lazy(() => rolesWhereInputSchema) ]).optional(),
});

export default RolePermissionWhereInputSchema;
