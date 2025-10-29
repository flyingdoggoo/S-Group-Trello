import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UsersScalarRelationFilterSchema } from './UsersScalarRelationFilterSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { RolesScalarRelationFilterSchema } from './RolesScalarRelationFilterSchema';
import { rolesWhereInputSchema } from './rolesWhereInputSchema';

export const UserRoleWhereInputSchema: z.ZodType<Prisma.UserRoleWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => UserRoleWhereInputSchema), z.lazy(() => UserRoleWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => UserRoleWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => UserRoleWhereInputSchema), z.lazy(() => UserRoleWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  roleId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  assignedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UsersScalarRelationFilterSchema), z.lazy(() => usersWhereInputSchema) ]).optional(),
  role: z.union([ z.lazy(() => RolesScalarRelationFilterSchema), z.lazy(() => rolesWhereInputSchema) ]).optional(),
});

export default UserRoleWhereInputSchema;
