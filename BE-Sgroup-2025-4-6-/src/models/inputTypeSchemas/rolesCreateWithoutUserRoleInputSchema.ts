import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectMemberCreateNestedManyWithoutRoleInputSchema } from './ProjectMemberCreateNestedManyWithoutRoleInputSchema';
import { RolePermissionCreateNestedManyWithoutRoleInputSchema } from './RolePermissionCreateNestedManyWithoutRoleInputSchema';

export const rolesCreateWithoutUserRoleInputSchema: z.ZodType<Prisma.rolesCreateWithoutUserRoleInput> = z.strictObject({
  id: z.uuid().optional(),
  roleName: z.string(),
  desciption: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  projectMembers: z.lazy(() => ProjectMemberCreateNestedManyWithoutRoleInputSchema).optional(),
  RolePermission: z.lazy(() => RolePermissionCreateNestedManyWithoutRoleInputSchema).optional(),
});

export default rolesCreateWithoutUserRoleInputSchema;
