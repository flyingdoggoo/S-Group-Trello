import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { permissionIncludeSchema } from '../inputTypeSchemas/permissionIncludeSchema'
import { permissionWhereUniqueInputSchema } from '../inputTypeSchemas/permissionWhereUniqueInputSchema'
import { permissionCreateInputSchema } from '../inputTypeSchemas/permissionCreateInputSchema'
import { permissionUncheckedCreateInputSchema } from '../inputTypeSchemas/permissionUncheckedCreateInputSchema'
import { permissionUpdateInputSchema } from '../inputTypeSchemas/permissionUpdateInputSchema'
import { permissionUncheckedUpdateInputSchema } from '../inputTypeSchemas/permissionUncheckedUpdateInputSchema'
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

export const permissionUpsertArgsSchema: z.ZodType<Prisma.permissionUpsertArgs> = z.object({
  select: permissionSelectSchema.optional(),
  include: z.lazy(() => permissionIncludeSchema).optional(),
  where: permissionWhereUniqueInputSchema, 
  create: z.union([ permissionCreateInputSchema, permissionUncheckedCreateInputSchema ]),
  update: z.union([ permissionUpdateInputSchema, permissionUncheckedUpdateInputSchema ]),
}).strict();

export default permissionUpsertArgsSchema;
