import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { rolesWhereInputSchema } from './rolesWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { ProjectMemberListRelationFilterSchema } from './ProjectMemberListRelationFilterSchema';
import { RolePermissionListRelationFilterSchema } from './RolePermissionListRelationFilterSchema';
import { UserRoleListRelationFilterSchema } from './UserRoleListRelationFilterSchema';

export const rolesWhereUniqueInputSchema: z.ZodType<Prisma.rolesWhereUniqueInput> = z.object({
  id: z.uuid(),
})
.and(z.strictObject({
  id: z.uuid().optional(),
  AND: z.union([ z.lazy(() => rolesWhereInputSchema), z.lazy(() => rolesWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => rolesWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => rolesWhereInputSchema), z.lazy(() => rolesWhereInputSchema).array() ]).optional(),
  roleName: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  desciption: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
  projectMembers: z.lazy(() => ProjectMemberListRelationFilterSchema).optional(),
  RolePermission: z.lazy(() => RolePermissionListRelationFilterSchema).optional(),
  UserRole: z.lazy(() => UserRoleListRelationFilterSchema).optional(),
}));

export default rolesWhereUniqueInputSchema;
