import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { EnumUserStatusEnumFilterSchema } from './EnumUserStatusEnumFilterSchema';
import { UserStatusEnumSchema } from './UserStatusEnumSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { AccountsNullableScalarRelationFilterSchema } from './AccountsNullableScalarRelationFilterSchema';
import { accountsWhereInputSchema } from './accountsWhereInputSchema';
import { SocialAccountsNullableScalarRelationFilterSchema } from './SocialAccountsNullableScalarRelationFilterSchema';
import { socialAccountsWhereInputSchema } from './socialAccountsWhereInputSchema';
import { TokensListRelationFilterSchema } from './TokensListRelationFilterSchema';
import { OtpsNullableScalarRelationFilterSchema } from './OtpsNullableScalarRelationFilterSchema';
import { otpsWhereInputSchema } from './otpsWhereInputSchema';
import { ProjectMemberListRelationFilterSchema } from './ProjectMemberListRelationFilterSchema';
import { UserRoleListRelationFilterSchema } from './UserRoleListRelationFilterSchema';
import { BoardMemberListRelationFilterSchema } from './BoardMemberListRelationFilterSchema';

export const usersWhereUniqueInputSchema: z.ZodType<Prisma.usersWhereUniqueInput> = z.union([
  z.object({
    id: z.uuid(),
    email: z.string(),
  }),
  z.object({
    id: z.uuid(),
  }),
  z.object({
    email: z.string(),
  }),
])
.and(z.strictObject({
  id: z.uuid().optional(),
  email: z.string().optional(),
  AND: z.union([ z.lazy(() => usersWhereInputSchema), z.lazy(() => usersWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => usersWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => usersWhereInputSchema), z.lazy(() => usersWhereInputSchema).array() ]).optional(),
  name: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  bio: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  address: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  avatar: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  verify: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  status: z.union([ z.lazy(() => EnumUserStatusEnumFilterSchema), z.lazy(() => UserStatusEnumSchema) ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  deletedAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
  accounts: z.union([ z.lazy(() => AccountsNullableScalarRelationFilterSchema), z.lazy(() => accountsWhereInputSchema) ]).optional().nullable(),
  socialAccounts: z.union([ z.lazy(() => SocialAccountsNullableScalarRelationFilterSchema), z.lazy(() => socialAccountsWhereInputSchema) ]).optional().nullable(),
  tokens: z.lazy(() => TokensListRelationFilterSchema).optional(),
  otps: z.union([ z.lazy(() => OtpsNullableScalarRelationFilterSchema), z.lazy(() => otpsWhereInputSchema) ]).optional().nullable(),
  projectMembers: z.lazy(() => ProjectMemberListRelationFilterSchema).optional(),
  UserRole: z.lazy(() => UserRoleListRelationFilterSchema).optional(),
  BoardMember: z.lazy(() => BoardMemberListRelationFilterSchema).optional(),
}));

export default usersWhereUniqueInputSchema;
