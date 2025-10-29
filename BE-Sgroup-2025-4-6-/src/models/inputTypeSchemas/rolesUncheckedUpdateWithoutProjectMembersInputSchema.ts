import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { RolePermissionUncheckedUpdateManyWithoutRoleNestedInputSchema } from './RolePermissionUncheckedUpdateManyWithoutRoleNestedInputSchema';
import { UserRoleUncheckedUpdateManyWithoutRoleNestedInputSchema } from './UserRoleUncheckedUpdateManyWithoutRoleNestedInputSchema';

export const rolesUncheckedUpdateWithoutProjectMembersInputSchema: z.ZodType<Prisma.rolesUncheckedUpdateWithoutProjectMembersInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roleName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  desciption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  RolePermission: z.lazy(() => RolePermissionUncheckedUpdateManyWithoutRoleNestedInputSchema).optional(),
  UserRole: z.lazy(() => UserRoleUncheckedUpdateManyWithoutRoleNestedInputSchema).optional(),
});

export default rolesUncheckedUpdateWithoutProjectMembersInputSchema;
