import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { rolesUpdateOneRequiredWithoutUserRoleNestedInputSchema } from './rolesUpdateOneRequiredWithoutUserRoleNestedInputSchema';

export const UserRoleUpdateWithoutUserInputSchema: z.ZodType<Prisma.UserRoleUpdateWithoutUserInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  role: z.lazy(() => rolesUpdateOneRequiredWithoutUserRoleNestedInputSchema).optional(),
});

export default UserRoleUpdateWithoutUserInputSchema;
