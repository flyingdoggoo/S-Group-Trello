import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { rolesIncludeSchema } from '../inputTypeSchemas/rolesIncludeSchema'
import { rolesWhereInputSchema } from '../inputTypeSchemas/rolesWhereInputSchema'
import { rolesOrderByWithRelationInputSchema } from '../inputTypeSchemas/rolesOrderByWithRelationInputSchema'
import { rolesWhereUniqueInputSchema } from '../inputTypeSchemas/rolesWhereUniqueInputSchema'
import { RolesScalarFieldEnumSchema } from '../inputTypeSchemas/RolesScalarFieldEnumSchema'
import { ProjectMemberFindManyArgsSchema } from "../outputTypeSchemas/ProjectMemberFindManyArgsSchema"
import { RolePermissionFindManyArgsSchema } from "../outputTypeSchemas/RolePermissionFindManyArgsSchema"
import { UserRoleFindManyArgsSchema } from "../outputTypeSchemas/UserRoleFindManyArgsSchema"
import { BoardMemberFindManyArgsSchema } from "../outputTypeSchemas/BoardMemberFindManyArgsSchema"
import { RolesCountOutputTypeArgsSchema } from "../outputTypeSchemas/RolesCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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
  BoardMember: z.union([z.boolean(),z.lazy(() => BoardMemberFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => RolesCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const rolesFindManyArgsSchema: z.ZodType<Prisma.rolesFindManyArgs> = z.object({
  select: rolesSelectSchema.optional(),
  include: z.lazy(() => rolesIncludeSchema).optional(),
  where: rolesWhereInputSchema.optional(), 
  orderBy: z.union([ rolesOrderByWithRelationInputSchema.array(), rolesOrderByWithRelationInputSchema ]).optional(),
  cursor: rolesWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RolesScalarFieldEnumSchema, RolesScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default rolesFindManyArgsSchema;
