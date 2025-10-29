import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { permissionIncludeSchema } from '../inputTypeSchemas/permissionIncludeSchema'
import { permissionWhereInputSchema } from '../inputTypeSchemas/permissionWhereInputSchema'
import { permissionOrderByWithRelationInputSchema } from '../inputTypeSchemas/permissionOrderByWithRelationInputSchema'
import { permissionWhereUniqueInputSchema } from '../inputTypeSchemas/permissionWhereUniqueInputSchema'
import { PermissionScalarFieldEnumSchema } from '../inputTypeSchemas/PermissionScalarFieldEnumSchema'
import { RolePermissionFindManyArgsSchema } from "../outputTypeSchemas/RolePermissionFindManyArgsSchema"
import { PermissionCountOutputTypeArgsSchema } from "../outputTypeSchemas/PermissionCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const permissionSelectSchema: z.ZodType<Prisma.permissionSelect> = z.object({
  id: z.boolean().optional(),
  permission: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  RolePermission: z.union([z.boolean(),z.lazy(() => RolePermissionFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => PermissionCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const permissionFindFirstArgsSchema: z.ZodType<Prisma.permissionFindFirstArgs> = z.object({
  select: permissionSelectSchema.optional(),
  include: z.lazy(() => permissionIncludeSchema).optional(),
  where: permissionWhereInputSchema.optional(), 
  orderBy: z.union([ permissionOrderByWithRelationInputSchema.array(), permissionOrderByWithRelationInputSchema ]).optional(),
  cursor: permissionWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ PermissionScalarFieldEnumSchema, PermissionScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default permissionFindFirstArgsSchema;
