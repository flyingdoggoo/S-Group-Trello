import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
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
import { InvitationsListRelationFilterSchema } from './InvitationsListRelationFilterSchema';
import { CardMemberListRelationFilterSchema } from './CardMemberListRelationFilterSchema';
import { CardCommentListRelationFilterSchema } from './CardCommentListRelationFilterSchema';

export const usersWhereInputSchema: z.ZodType<Prisma.usersWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => usersWhereInputSchema), z.lazy(() => usersWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => usersWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => usersWhereInputSchema), z.lazy(() => usersWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  email: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
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
  Invitations: z.lazy(() => InvitationsListRelationFilterSchema).optional(),
  CardMember: z.lazy(() => CardMemberListRelationFilterSchema).optional(),
  CardComment: z.lazy(() => CardCommentListRelationFilterSchema).optional(),
});

export default usersWhereInputSchema;
