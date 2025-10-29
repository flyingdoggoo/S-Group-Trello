import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { UserRoleIncludeSchema } from '../inputTypeSchemas/UserRoleIncludeSchema'
import { UserRoleUpdateInputSchema } from '../inputTypeSchemas/UserRoleUpdateInputSchema'
import { UserRoleUncheckedUpdateInputSchema } from '../inputTypeSchemas/UserRoleUncheckedUpdateInputSchema'
import { UserRoleWhereUniqueInputSchema } from '../inputTypeSchemas/UserRoleWhereUniqueInputSchema'
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

export const UserRoleUpdateArgsSchema: z.ZodType<Prisma.UserRoleUpdateArgs> = z.object({
  select: UserRoleSelectSchema.optional(),
  include: z.lazy(() => UserRoleIncludeSchema).optional(),
  data: z.union([ UserRoleUpdateInputSchema, UserRoleUncheckedUpdateInputSchema ]),
  where: UserRoleWhereUniqueInputSchema, 
}).strict();

export default UserRoleUpdateArgsSchema;
