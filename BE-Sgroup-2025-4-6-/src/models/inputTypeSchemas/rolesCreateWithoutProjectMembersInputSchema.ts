import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { RolePermissionCreateNestedManyWithoutRoleInputSchema } from './RolePermissionCreateNestedManyWithoutRoleInputSchema';
import { UserRoleCreateNestedManyWithoutRoleInputSchema } from './UserRoleCreateNestedManyWithoutRoleInputSchema';
import { BoardMemberCreateNestedManyWithoutRoleInputSchema } from './BoardMemberCreateNestedManyWithoutRoleInputSchema';

export const rolesCreateWithoutProjectMembersInputSchema: z.ZodType<Prisma.rolesCreateWithoutProjectMembersInput> = z.strictObject({
  id: z.uuid().optional(),
  roleName: z.string(),
  desciption: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  RolePermission: z.lazy(() => RolePermissionCreateNestedManyWithoutRoleInputSchema).optional(),
  UserRole: z.lazy(() => UserRoleCreateNestedManyWithoutRoleInputSchema).optional(),
  BoardMember: z.lazy(() => BoardMemberCreateNestedManyWithoutRoleInputSchema).optional(),
});

export default rolesCreateWithoutProjectMembersInputSchema;
