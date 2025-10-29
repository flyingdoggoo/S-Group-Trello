import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { permissionUpdateOneRequiredWithoutRolePermissionNestedInputSchema } from './permissionUpdateOneRequiredWithoutRolePermissionNestedInputSchema';
import { rolesUpdateOneRequiredWithoutRolePermissionNestedInputSchema } from './rolesUpdateOneRequiredWithoutRolePermissionNestedInputSchema';

export const RolePermissionUpdateInputSchema: z.ZodType<Prisma.RolePermissionUpdateInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  permission: z.lazy(() => permissionUpdateOneRequiredWithoutRolePermissionNestedInputSchema).optional(),
  role: z.lazy(() => rolesUpdateOneRequiredWithoutRolePermissionNestedInputSchema).optional(),
});

export default RolePermissionUpdateInputSchema;
