import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserStatusEnumSchema } from './UserStatusEnumSchema';
import { accountsUncheckedCreateNestedOneWithoutUserInputSchema } from './accountsUncheckedCreateNestedOneWithoutUserInputSchema';
import { socialAccountsUncheckedCreateNestedOneWithoutUserInputSchema } from './socialAccountsUncheckedCreateNestedOneWithoutUserInputSchema';
import { otpsUncheckedCreateNestedOneWithoutUserInputSchema } from './otpsUncheckedCreateNestedOneWithoutUserInputSchema';
import { ProjectMemberUncheckedCreateNestedManyWithoutUserInputSchema } from './ProjectMemberUncheckedCreateNestedManyWithoutUserInputSchema';
import { UserRoleUncheckedCreateNestedManyWithoutUserInputSchema } from './UserRoleUncheckedCreateNestedManyWithoutUserInputSchema';

export const usersUncheckedCreateWithoutTokensInputSchema: z.ZodType<Prisma.usersUncheckedCreateWithoutTokensInput> = z.strictObject({
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
  otps: z.lazy(() => otpsUncheckedCreateNestedOneWithoutUserInputSchema).optional(),
  projectMembers: z.lazy(() => ProjectMemberUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
  UserRole: z.lazy(() => UserRoleUncheckedCreateNestedManyWithoutUserInputSchema).optional(),
});

export default usersUncheckedCreateWithoutTokensInputSchema;
