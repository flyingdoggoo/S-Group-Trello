import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserStatusEnumSchema } from './UserStatusEnumSchema';
import { accountsCreateNestedOneWithoutUserInputSchema } from './accountsCreateNestedOneWithoutUserInputSchema';
import { socialAccountsCreateNestedOneWithoutUserInputSchema } from './socialAccountsCreateNestedOneWithoutUserInputSchema';
import { tokensCreateNestedManyWithoutUserInputSchema } from './tokensCreateNestedManyWithoutUserInputSchema';
import { otpsCreateNestedOneWithoutUserInputSchema } from './otpsCreateNestedOneWithoutUserInputSchema';
import { ProjectMemberCreateNestedManyWithoutUserInputSchema } from './ProjectMemberCreateNestedManyWithoutUserInputSchema';
import { BoardMemberCreateNestedManyWithoutUserInputSchema } from './BoardMemberCreateNestedManyWithoutUserInputSchema';
import { InvitationsCreateNestedManyWithoutOwnerInputSchema } from './InvitationsCreateNestedManyWithoutOwnerInputSchema';
import { CardMemberCreateNestedManyWithoutUserInputSchema } from './CardMemberCreateNestedManyWithoutUserInputSchema';
import { CardCommentCreateNestedManyWithoutUserInputSchema } from './CardCommentCreateNestedManyWithoutUserInputSchema';

export const usersCreateWithoutUserRoleInputSchema: z.ZodType<Prisma.usersCreateWithoutUserRoleInput> = z.strictObject({
  id: z.uuid().optional(),
  email: z.string(),
  name: z.string().optional().nullable(),
  bio: z.string().optional().nullable(),
  address: z.string().optional().nullable(),
  avatar: z.string().optional().nullable(),
  verify: z.boolean().optional(),
  status: z.lazy(() => UserStatusEnumSchema).optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
  accounts: z.lazy(() => accountsCreateNestedOneWithoutUserInputSchema).optional(),
  socialAccounts: z.lazy(() => socialAccountsCreateNestedOneWithoutUserInputSchema).optional(),
  tokens: z.lazy(() => tokensCreateNestedManyWithoutUserInputSchema).optional(),
  otps: z.lazy(() => otpsCreateNestedOneWithoutUserInputSchema).optional(),
  projectMembers: z.lazy(() => ProjectMemberCreateNestedManyWithoutUserInputSchema).optional(),
  BoardMember: z.lazy(() => BoardMemberCreateNestedManyWithoutUserInputSchema).optional(),
  Invitations: z.lazy(() => InvitationsCreateNestedManyWithoutOwnerInputSchema).optional(),
  CardMember: z.lazy(() => CardMemberCreateNestedManyWithoutUserInputSchema).optional(),
  CardComment: z.lazy(() => CardCommentCreateNestedManyWithoutUserInputSchema).optional(),
});

export default usersCreateWithoutUserRoleInputSchema;
