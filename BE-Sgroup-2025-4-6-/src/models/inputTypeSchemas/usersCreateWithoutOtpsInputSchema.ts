import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserStatusEnumSchema } from './UserStatusEnumSchema';
import { accountsCreateNestedOneWithoutUserInputSchema } from './accountsCreateNestedOneWithoutUserInputSchema';
import { socialAccountsCreateNestedOneWithoutUserInputSchema } from './socialAccountsCreateNestedOneWithoutUserInputSchema';
import { tokensCreateNestedManyWithoutUserInputSchema } from './tokensCreateNestedManyWithoutUserInputSchema';
import { ProjectMemberCreateNestedManyWithoutUserInputSchema } from './ProjectMemberCreateNestedManyWithoutUserInputSchema';
import { UserRoleCreateNestedManyWithoutUserInputSchema } from './UserRoleCreateNestedManyWithoutUserInputSchema';

export const usersCreateWithoutOtpsInputSchema: z.ZodType<Prisma.usersCreateWithoutOtpsInput> = z.strictObject({
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
  projectMembers: z.lazy(() => ProjectMemberCreateNestedManyWithoutUserInputSchema).optional(),
  UserRole: z.lazy(() => UserRoleCreateNestedManyWithoutUserInputSchema).optional(),
});

export default usersCreateWithoutOtpsInputSchema;
