import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { usersIncludeSchema } from '../inputTypeSchemas/usersIncludeSchema'
import { usersWhereUniqueInputSchema } from '../inputTypeSchemas/usersWhereUniqueInputSchema'
import { accountsArgsSchema } from "../outputTypeSchemas/accountsArgsSchema"
import { socialAccountsArgsSchema } from "../outputTypeSchemas/socialAccountsArgsSchema"
import { tokensFindManyArgsSchema } from "../outputTypeSchemas/tokensFindManyArgsSchema"
import { otpsArgsSchema } from "../outputTypeSchemas/otpsArgsSchema"
import { ProjectMemberFindManyArgsSchema } from "../outputTypeSchemas/ProjectMemberFindManyArgsSchema"
import { UserRoleFindManyArgsSchema } from "../outputTypeSchemas/UserRoleFindManyArgsSchema"
import { UsersCountOutputTypeArgsSchema } from "../outputTypeSchemas/UsersCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const usersSelectSchema: z.ZodType<Prisma.usersSelect> = z.object({
  id: z.boolean().optional(),
  email: z.boolean().optional(),
  name: z.boolean().optional(),
  bio: z.boolean().optional(),
  address: z.boolean().optional(),
  avatar: z.boolean().optional(),
  verify: z.boolean().optional(),
  status: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  accounts: z.union([z.boolean(),z.lazy(() => accountsArgsSchema)]).optional(),
  socialAccounts: z.union([z.boolean(),z.lazy(() => socialAccountsArgsSchema)]).optional(),
  tokens: z.union([z.boolean(),z.lazy(() => tokensFindManyArgsSchema)]).optional(),
  otps: z.union([z.boolean(),z.lazy(() => otpsArgsSchema)]).optional(),
  projectMembers: z.union([z.boolean(),z.lazy(() => ProjectMemberFindManyArgsSchema)]).optional(),
  UserRole: z.union([z.boolean(),z.lazy(() => UserRoleFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UsersCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const usersFindUniqueOrThrowArgsSchema: z.ZodType<Prisma.usersFindUniqueOrThrowArgs> = z.object({
  select: usersSelectSchema.optional(),
  include: z.lazy(() => usersIncludeSchema).optional(),
  where: usersWhereUniqueInputSchema, 
}).strict();

export default usersFindUniqueOrThrowArgsSchema;
