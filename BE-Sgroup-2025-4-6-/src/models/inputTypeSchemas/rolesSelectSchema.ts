import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ProjectMemberFindManyArgsSchema } from "../outputTypeSchemas/ProjectMemberFindManyArgsSchema"
import { RolePermissionFindManyArgsSchema } from "../outputTypeSchemas/RolePermissionFindManyArgsSchema"
import { UserRoleFindManyArgsSchema } from "../outputTypeSchemas/UserRoleFindManyArgsSchema"
import { RolesCountOutputTypeArgsSchema } from "../outputTypeSchemas/RolesCountOutputTypeArgsSchema"

export const rolesSelectSchema: z.ZodType<Prisma.rolesSelect> = z.object({
  id: z.boolean().optional(),
  roleName: z.boolean().optional(),
  desciption: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  projectMembers: z.union([z.boolean(),z.lazy(() => ProjectMemberFindManyArgsSchema)]).optional(),
  RolePermission: z.union([z.boolean(),z.lazy(() => RolePermissionFindManyArgsSchema)]).optional(),
  UserRole: z.union([z.boolean(),z.lazy(() => UserRoleFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RolesCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default rolesSelectSchema;
