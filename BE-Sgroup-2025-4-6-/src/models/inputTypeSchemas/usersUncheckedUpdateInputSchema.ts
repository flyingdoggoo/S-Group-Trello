import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { UserStatusEnumSchema } from './UserStatusEnumSchema';
import { EnumUserStatusEnumFieldUpdateOperationsInputSchema } from './EnumUserStatusEnumFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { accountsUncheckedUpdateOneWithoutUserNestedInputSchema } from './accountsUncheckedUpdateOneWithoutUserNestedInputSchema';
import { socialAccountsUncheckedUpdateOneWithoutUserNestedInputSchema } from './socialAccountsUncheckedUpdateOneWithoutUserNestedInputSchema';
import { tokensUncheckedUpdateManyWithoutUserNestedInputSchema } from './tokensUncheckedUpdateManyWithoutUserNestedInputSchema';
import { otpsUncheckedUpdateOneWithoutUserNestedInputSchema } from './otpsUncheckedUpdateOneWithoutUserNestedInputSchema';
import { ProjectMemberUncheckedUpdateManyWithoutUserNestedInputSchema } from './ProjectMemberUncheckedUpdateManyWithoutUserNestedInputSchema';
import { UserRoleUncheckedUpdateManyWithoutUserNestedInputSchema } from './UserRoleUncheckedUpdateManyWithoutUserNestedInputSchema';
import { BoardMemberUncheckedUpdateManyWithoutUserNestedInputSchema } from './BoardMemberUncheckedUpdateManyWithoutUserNestedInputSchema';

export const usersUncheckedUpdateInputSchema: z.ZodType<Prisma.usersUncheckedUpdateInput> = z.strictObject({
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
  accounts: z.lazy(() => accountsUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  socialAccounts: z.lazy(() => socialAccountsUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  tokens: z.lazy(() => tokensUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  otps: z.lazy(() => otpsUncheckedUpdateOneWithoutUserNestedInputSchema).optional(),
  projectMembers: z.lazy(() => ProjectMemberUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  UserRole: z.lazy(() => UserRoleUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
  BoardMember: z.lazy(() => BoardMemberUncheckedUpdateManyWithoutUserNestedInputSchema).optional(),
});

export default usersUncheckedUpdateInputSchema;
