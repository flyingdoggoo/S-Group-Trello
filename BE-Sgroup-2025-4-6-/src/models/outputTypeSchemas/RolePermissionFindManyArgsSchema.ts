import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RolePermissionIncludeSchema } from '../inputTypeSchemas/RolePermissionIncludeSchema'
import { RolePermissionWhereInputSchema } from '../inputTypeSchemas/RolePermissionWhereInputSchema'
import { RolePermissionOrderByWithRelationInputSchema } from '../inputTypeSchemas/RolePermissionOrderByWithRelationInputSchema'
import { RolePermissionWhereUniqueInputSchema } from '../inputTypeSchemas/RolePermissionWhereUniqueInputSchema'
import { RolePermissionScalarFieldEnumSchema } from '../inputTypeSchemas/RolePermissionScalarFieldEnumSchema'
import { permissionArgsSchema } from "../outputTypeSchemas/permissionArgsSchema"
import { rolesArgsSchema } from "../outputTypeSchemas/rolesArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const RolePermissionSelectSchema: z.ZodType<Prisma.RolePermissionSelect> = z.object({
  id: z.boolean().optional(),
  roleId: z.boolean().optional(),
  permissionId: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  permission: z.union([z.boolean(),z.lazy(() => permissionArgsSchema)]).optional(),
  role: z.union([z.boolean(),z.lazy(() => rolesArgsSchema)]).optional(),
}).strict()

export const RolePermissionFindManyArgsSchema: z.ZodType<Prisma.RolePermissionFindManyArgs> = z.object({
  select: RolePermissionSelectSchema.optional(),
  include: z.lazy(() => RolePermissionIncludeSchema).optional(),
  where: RolePermissionWhereInputSchema.optional(), 
  orderBy: z.union([ RolePermissionOrderByWithRelationInputSchema.array(), RolePermissionOrderByWithRelationInputSchema ]).optional(),
  cursor: RolePermissionWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ RolePermissionScalarFieldEnumSchema, RolePermissionScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default RolePermissionFindManyArgsSchema;
