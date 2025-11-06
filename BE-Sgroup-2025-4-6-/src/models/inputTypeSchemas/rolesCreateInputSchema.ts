import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectMemberCreateNestedManyWithoutRoleInputSchema } from './ProjectMemberCreateNestedManyWithoutRoleInputSchema';
import { RolePermissionCreateNestedManyWithoutRoleInputSchema } from './RolePermissionCreateNestedManyWithoutRoleInputSchema';
import { UserRoleCreateNestedManyWithoutRoleInputSchema } from './UserRoleCreateNestedManyWithoutRoleInputSchema';
import { BoardMemberCreateNestedManyWithoutRoleInputSchema } from './BoardMemberCreateNestedManyWithoutRoleInputSchema';

export const rolesCreateInputSchema: z.ZodType<Prisma.rolesCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  roleName: z.string(),
  desciption: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  projectMembers: z.lazy(() => ProjectMemberCreateNestedManyWithoutRoleInputSchema).optional(),
  RolePermission: z.lazy(() => RolePermissionCreateNestedManyWithoutRoleInputSchema).optional(),
  UserRole: z.lazy(() => UserRoleCreateNestedManyWithoutRoleInputSchema).optional(),
  BoardMember: z.lazy(() => BoardMemberCreateNestedManyWithoutRoleInputSchema).optional(),
});

export default rolesCreateInputSchema;
