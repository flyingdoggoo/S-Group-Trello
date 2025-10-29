import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { permissionIncludeSchema } from '../inputTypeSchemas/permissionIncludeSchema'
import { permissionWhereUniqueInputSchema } from '../inputTypeSchemas/permissionWhereUniqueInputSchema'
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

export const permissionDeleteArgsSchema: z.ZodType<Prisma.permissionDeleteArgs> = z.object({
  select: permissionSelectSchema.optional(),
  include: z.lazy(() => permissionIncludeSchema).optional(),
  where: permissionWhereUniqueInputSchema, 
}).strict();

export default permissionDeleteArgsSchema;
