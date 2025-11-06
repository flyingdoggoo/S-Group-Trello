import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserStatusEnumSchema } from './UserStatusEnumSchema';
import { accountsUncheckedCreateNestedOneWithoutUserInputSchema } from './accountsUncheckedCreateNestedOneWithoutUserInputSchema';
import { socialAccountsUncheckedCreateNestedOneWithoutUserInputSchema } from './socialAccountsUncheckedCreateNestedOneWithoutUserInputSchema';
import { tokensUncheckedCreateNestedManyWithoutUserInputSchema } from './tokensUncheckedCreateNestedManyWithoutUserInputSchema';
import { ProjectMemberUncheckedCreateNestedManyWithoutUserInputSchema } from './ProjectMemberUncheckedCreateNestedManyWithoutUserInputSchema';
import { UserRoleUncheckedCreateNestedManyWithoutUserInputSchema } from './UserRoleUncheckedCreateNestedManyWithoutUserInputSchema';
import { BoardMemberUncheckedCreateNestedManyWithoutUserInputSchema } from './BoardMemberUncheckedCreateNestedManyWithoutUserInputSchema';

export const usersUncheckedCreateWithoutOtpsInputSchema: z.ZodType<Prisma.usersUncheckedCreateWithoutOtpsInput> = z.strictObject({
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
  accounts: z.lazy(() => accountsUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  socialAccounts: z.lazy(() => socialAccountsUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  tokens: z.lazy(() => tokensUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  projectMembers: z.lazy(() => ProjectMemberUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  UserRole: z.lazy(() => UserRoleUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  BoardMember: z.lazy(() => BoardMemberUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
});

export default usersUncheckedCreateWithoutOtpsInputSchema;
