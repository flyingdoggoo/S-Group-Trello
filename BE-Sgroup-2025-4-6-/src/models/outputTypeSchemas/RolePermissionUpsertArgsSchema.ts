import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { RolePermissionIncludeSchema } from '../inputTypeSchemas/RolePermissionIncludeSchema'
import { RolePermissionWhereUniqueInputSchema } from '../inputTypeSchemas/RolePermissionWhereUniqueInputSchema'
import { RolePermissionCreateInputSchema } from '../inputTypeSchemas/RolePermissionCreateInputSchema'
import { RolePermissionUncheckedCreateInputSchema } from '../inputTypeSchemas/RolePermissionUncheckedCreateInputSchema'
import { RolePermissionUpdateInputSchema } from '../inputTypeSchemas/RolePermissionUpdateInputSchema'
import { RolePermissionUncheckedUpdateInputSchema } from '../inputTypeSchemas/RolePermissionUncheckedUpdateInputSchema'
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

export const RolePermissionUpsertArgsSchema: z.ZodType<Prisma.RolePermissionUpsertArgs> = z.object({
  select: RolePermissionSelectSchema.optional(),
  include: z.lazy(() => RolePermissionIncludeSchema).optional(),
  where: RolePermissionWhereUniqueInputSchema, 
  create: z.union([ RolePermissionCreateInputSchema, RolePermissionUncheckedCreateInputSchema ]),
  update: z.union([ RolePermissionUpdateInputSchema, RolePermissionUncheckedUpdateInputSchema ]),
}).strict();

export default RolePermissionUpsertArgsSchema;
