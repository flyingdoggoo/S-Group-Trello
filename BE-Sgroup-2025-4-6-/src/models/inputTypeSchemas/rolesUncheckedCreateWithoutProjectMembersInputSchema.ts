import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RolePermissionUncheckedCreateNestedManyWithoutRoleInputSchema } from './RolePermissionUncheckedCreateNestedManyWithoutRoleInputSchema';
import { UserRoleUncheckedCreateNestedManyWithoutRoleInputSchema } from './UserRoleUncheckedCreateNestedManyWithoutRoleInputSchema';

export const rolesUncheckedCreateWithoutProjectMembersInputSchema: z.ZodType<Prisma.rolesUncheckedCreateWithoutProjectMembersInput> = z.strictObject({
  id: z.uuid().optional(),
  roleName: z.string(),
  desciption: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  RolePermission: z.lazy(() => RolePermissionUncheckedCreateNestedManyWithoutRoleInputSchema).optional(),
  UserRole: z.lazy(() => UserRoleUncheckedCreateNestedManyWithoutRoleInputSchema).optional(),
});

export default rolesUncheckedCreateWithoutProjectMembersInputSchema;
