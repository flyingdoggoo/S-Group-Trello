import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NullableStringFieldUpdateOperationsInputSchema } from './NullableStringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { ProjectMemberUpdateManyWithoutRoleNestedInputSchema } from './ProjectMemberUpdateManyWithoutRoleNestedInputSchema';
import { RolePermissionUpdateManyWithoutRoleNestedInputSchema } from './RolePermissionUpdateManyWithoutRoleNestedInputSchema';
import { UserRoleUpdateManyWithoutRoleNestedInputSchema } from './UserRoleUpdateManyWithoutRoleNestedInputSchema';

export const rolesUpdateWithoutBoardMemberInputSchema: z.ZodType<Prisma.rolesUpdateWithoutBoardMemberInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  roleName: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  desciption: z.union([ z.string(),z.lazy(() => NullableStringFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  projectMembers: z.lazy(() => ProjectMemberUpdateManyWithoutRoleNestedInputSchema).optional(),
  RolePermission: z.lazy(() => RolePermissionUpdateManyWithoutRoleNestedInputSchema).optional(),
  UserRole: z.lazy(() => UserRoleUpdateManyWithoutRoleNestedInputSchema).optional(),
});

export default rolesUpdateWithoutBoardMemberInputSchema;
