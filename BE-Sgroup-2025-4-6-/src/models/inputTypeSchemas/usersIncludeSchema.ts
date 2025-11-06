import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { accountsArgsSchema } from "../outputTypeSchemas/accountsArgsSchema"
import { socialAccountsArgsSchema } from "../outputTypeSchemas/socialAccountsArgsSchema"
import { tokensFindManyArgsSchema } from "../outputTypeSchemas/tokensFindManyArgsSchema"
import { otpsArgsSchema } from "../outputTypeSchemas/otpsArgsSchema"
import { ProjectMemberFindManyArgsSchema } from "../outputTypeSchemas/ProjectMemberFindManyArgsSchema"
import { UserRoleFindManyArgsSchema } from "../outputTypeSchemas/UserRoleFindManyArgsSchema"
import { BoardMemberFindManyArgsSchema } from "../outputTypeSchemas/BoardMemberFindManyArgsSchema"
import { UsersCountOutputTypeArgsSchema } from "../outputTypeSchemas/UsersCountOutputTypeArgsSchema"

export const usersIncludeSchema: z.ZodType<Prisma.usersInclude> = z.object({
  accounts: z.union([z.boolean(),z.lazy(() => accountsArgsSchema)]).optional(),
  socialAccounts: z.union([z.boolean(),z.lazy(() => socialAccountsArgsSchema)]).optional(),
  tokens: z.union([z.boolean(),z.lazy(() => tokensFindManyArgsSchema)]).optional(),
  otps: z.union([z.boolean(),z.lazy(() => otpsArgsSchema)]).optional(),
  projectMembers: z.union([z.boolean(),z.lazy(() => ProjectMemberFindManyArgsSchema)]).optional(),
  UserRole: z.union([z.boolean(),z.lazy(() => UserRoleFindManyArgsSchema)]).optional(),
  BoardMember: z.union([z.boolean(),z.lazy(() => BoardMemberFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => UsersCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default usersIncludeSchema;
