import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { rolesUpdateOneRequiredWithoutRolePermissionNestedInputSchema } from './rolesUpdateOneRequiredWithoutRolePermissionNestedInputSchema';

export const RolePermissionUpdateWithoutPermissionInputSchema: z.ZodType<Prisma.RolePermissionUpdateWithoutPermissionInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  deletedAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  role: z.lazy(() => rolesUpdateOneRequiredWithoutRolePermissionNestedInputSchema).optional(),
});

export default RolePermissionUpdateWithoutPermissionInputSchema;
