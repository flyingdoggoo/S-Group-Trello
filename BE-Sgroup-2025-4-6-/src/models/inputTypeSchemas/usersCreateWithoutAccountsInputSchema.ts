import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserStatusEnumSchema } from './UserStatusEnumSchema';
import { socialAccountsCreateNestedOneWithoutUserInputSchema } from './socialAccountsCreateNestedOneWithoutUserInputSchema';
import { tokensCreateNestedManyWithoutUserInputSchema } from './tokensCreateNestedManyWithoutUserInputSchema';
import { otpsCreateNestedOneWithoutUserInputSchema } from './otpsCreateNestedOneWithoutUserInputSchema';
import { ProjectMemberCreateNestedManyWithoutUserInputSchema } from './ProjectMemberCreateNestedManyWithoutUserInputSchema';
import { UserRoleCreateNestedManyWithoutUserInputSchema } from './UserRoleCreateNestedManyWithoutUserInputSchema';

export const usersCreateWithoutAccountsInputSchema: z.ZodType<Prisma.usersCreateWithoutAccountsInput> = z.strictObject({
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
  socialAccounts: z.lazy(() => socialAccountsCreateNestedOneWithoutUserInputSchema).optional(),
  tokens: z.lazy(() => tokensCreateNestedManyWithoutUserInputSchema).optional(),
  otps: z.lazy(() => otpsCreateNestedOneWithoutUserInputSchema).optional(),
  projectMembers: z.lazy(() => ProjectMemberCreateNestedManyWithoutUserInputSchema).optional(),
  UserRole: z.lazy(() => UserRoleCreateNestedManyWithoutUserInputSchema).optional(),
});

export default usersCreateWithoutAccountsInputSchema;
