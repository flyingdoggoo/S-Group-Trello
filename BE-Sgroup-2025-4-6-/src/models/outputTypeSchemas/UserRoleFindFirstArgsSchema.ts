import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserRoleIncludeSchema } from '../inputTypeSchemas/UserRoleIncludeSchema'
import { UserRoleWhereInputSchema } from '../inputTypeSchemas/UserRoleWhereInputSchema'
import { UserRoleOrderByWithRelationInputSchema } from '../inputTypeSchemas/UserRoleOrderByWithRelationInputSchema'
import { UserRoleWhereUniqueInputSchema } from '../inputTypeSchemas/UserRoleWhereUniqueInputSchema'
import { UserRoleScalarFieldEnumSchema } from '../inputTypeSchemas/UserRoleScalarFieldEnumSchema'
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"
import { rolesArgsSchema } from "../outputTypeSchemas/rolesArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const UserRoleSelectSchema: z.ZodType<Prisma.UserRoleSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  roleId: z.boolean().optional(),
  assignedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
  role: z.union([z.boolean(),z.lazy(() => rolesArgsSchema)]).optional(),
}).strict()

export const UserRoleFindFirstArgsSchema: z.ZodType<Prisma.UserRoleFindFirstArgs> = z.object({
  select: UserRoleSelectSchema.optional(),
  include: z.lazy(() => UserRoleIncludeSchema).optional(),
  where: UserRoleWhereInputSchema.optional(), 
  orderBy: z.union([ UserRoleOrderByWithRelationInputSchema.array(), UserRoleOrderByWithRelationInputSchema ]).optional(),
  cursor: UserRoleWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ UserRoleScalarFieldEnumSchema, UserRoleScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default UserRoleFindFirstArgsSchema;
