import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectMemberUncheckedCreateNestedManyWithoutRoleInputSchema } from './ProjectMemberUncheckedCreateNestedManyWithoutRoleInputSchema';
import { UserRoleUncheckedCreateNestedManyWithoutRoleInputSchema } from './UserRoleUncheckedCreateNestedManyWithoutRoleInputSchema';

export const rolesUncheckedCreateWithoutRolePermissionInputSchema: z.ZodType<Prisma.rolesUncheckedCreateWithoutRolePermissionInput> = z.strictObject({
  id: z.uuid().optional(),
  roleName: z.string(),
  desciption: z.string().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  projectMembers: z.lazy(() => ProjectMemberUncheckedCreateNestedManyWithoutRoleInputSchema).optional(),
  UserRole: z.lazy(() => UserRoleUncheckedCreateNestedManyWithoutRoleInputSchema).optional(),
});

export default rolesUncheckedCreateWithoutRolePermissionInputSchema;
