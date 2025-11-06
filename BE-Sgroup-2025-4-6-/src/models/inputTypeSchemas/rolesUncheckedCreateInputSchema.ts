import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectMemberUncheckedCreateNestedManyWithoutRoleInputSchema } from './ProjectMemberUncheckedCreateNestedManyWithoutRoleInputSchema';
import { RolePermissionUncheckedCreateNestedManyWithoutRoleInputSchema } from './RolePermissionUncheckedCreateNestedManyWithoutRoleInputSchema';
import { UserRoleUncheckedCreateNestedManyWithoutRoleInputSchema } from './UserRoleUncheckedCreateNestedManyWithoutRoleInputSchema';
import { BoardMemberUncheckedCreateNestedManyWithoutRoleInputSchema } from './BoardMemberUncheckedCreateNestedManyWithoutRoleInputSchema';

export const rolesUncheckedCreateInputSchema: z.ZodType<Prisma.rolesUncheckedCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  roleName: z.string(),
  desciption: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  projectMembers: z.lazy(() => ProjectMemberUncheckedCreateNestedManyWithoutRoleInputSchema).optional(),
  RolePermission: z.lazy(() => RolePermissionUncheckedCreateNestedManyWithoutRoleInputSchema).optional(),
  UserRole: z.lazy(() => UserRoleUncheckedCreateNestedManyWithoutRoleInputSchema).optional(),
  BoardMember: z.lazy(() => BoardMemberUncheckedCreateNestedManyWithoutRoleInputSchema).optional(),
});

export default rolesUncheckedCreateInputSchema;
