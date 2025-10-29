import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { permissionIncludeSchema } from '../inputTypeSchemas/permissionIncludeSchema'
import { permissionCreateInputSchema } from '../inputTypeSchemas/permissionCreateInputSchema'
import { permissionUncheckedCreateInputSchema } from '../inputTypeSchemas/permissionUncheckedCreateInputSchema'
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

export const permissionCreateArgsSchema: z.ZodType<Prisma.permissionCreateArgs> = z.object({
  select: permissionSelectSchema.optional(),
  include: z.lazy(() => permissionIncludeSchema).optional(),
  data: z.union([ permissionCreateInputSchema, permissionUncheckedCreateInputSchema ]),
}).strict();

export default permissionCreateArgsSchema;
