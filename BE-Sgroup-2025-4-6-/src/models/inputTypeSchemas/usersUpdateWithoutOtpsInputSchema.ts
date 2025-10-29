import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { UserStatusEnumSchema } from './UserStatusEnumSchema';
import { EnumUserStatusEnumFieldUpdateOperationsInputSchema } from './EnumUserStatusEnumFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { accountsUpdateOneWithoutUserNestedInputSchema } from './accountsUpdateOneWithoutUserNestedInputSchema';
import { socialAccountsUpdateOneWithoutUserNestedInputSchema } from './socialAccountsUpdateOneWithoutUserNestedInputSchema';
import { tokensUpdateManyWithoutUserNestedInputSchema } from './tokensUpdateManyWithoutUserNestedInputSchema';
import { ProjectMemberUpdateManyWithoutUserNestedInputSchema } from './ProjectMemberUpdateManyWithoutUserNestedInputSchema';
import { UserRoleUpdateManyWithoutUserNestedInputSchema } from './UserRoleUpdateManyWithoutUserNestedInputSchema';

export const usersUpdateWithoutOtpsInputSchema: z.ZodType<Prisma.usersUpdateWithoutOtpsInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  email: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  name: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  bio: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  address: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  avatar: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  verify: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  status: z.union([ z.lazy(() => UserStatusEnumSchema), z.lazy(() => EnumUserStatusEnumFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  accounts: z.lazy(() => accountsUpdateOneWithoutUserNestedInputSchema).optional(),
  socialAccounts: z.lazy(() => socialAccountsUpdateOneWithoutUserNestedInputSchema).optional(),
  tokens: z.lazy(() => tokensUpdateManyWithoutUserNestedInputSchema).optional(),
  projectMembers: z.lazy(() => ProjectMemberUpdateManyWithoutUserNestedInputSchema).optional(),
  UserRole: z.lazy(() => UserRoleUpdateManyWithoutUserNestedInputSchema).optional(),
});

export default usersUpdateWithoutOtpsInputSchema;
