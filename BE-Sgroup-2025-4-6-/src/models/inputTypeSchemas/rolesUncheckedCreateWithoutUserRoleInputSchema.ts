import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectMemberUncheckedCreateNestedManyWithoutRoleInputSchema } from './ProjectMemberUncheckedCreateNestedManyWithoutRoleInputSchema';
import { RolePermissionUncheckedCreateNestedManyWithoutRoleInputSchema } from './RolePermissionUncheckedCreateNestedManyWithoutRoleInputSchema';

export const rolesUncheckedCreateWithoutUserRoleInputSchema: z.ZodType<Prisma.rolesUncheckedCreateWithoutUserRoleInput> = z.strictObject({
  id: z.uuid().optional(),
  roleName: z.string(),
  desciption: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  projectMembers: z.lazy(() => ProjectMemberUncheckedCreateNestedManyWithoutRoleInputSchema).optional(),
  RolePermission: z.lazy(() => RolePermissionUncheckedCreateNestedManyWithoutRoleInputSchema).optional(),
});

export default rolesUncheckedCreateWithoutUserRoleInputSchema;
