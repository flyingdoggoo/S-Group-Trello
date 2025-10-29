import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { permissionUpdateOneRequiredWithoutRolePermissionNestedInputSchema } from './permissionUpdateOneRequiredWithoutRolePermissionNestedInputSchema';

export const RolePermissionUpdateWithoutRoleInputSchema: z.ZodType<Prisma.RolePermissionUpdateWithoutRoleInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  permission: z.lazy(() => permissionUpdateOneRequiredWithoutRolePermissionNestedInputSchema).optional(),
});

export default RolePermissionUpdateWithoutRoleInputSchema;
