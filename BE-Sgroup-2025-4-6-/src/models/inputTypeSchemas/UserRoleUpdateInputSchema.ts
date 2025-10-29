import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { usersUpdateOneRequiredWithoutUserRoleNestedInputSchema } from './usersUpdateOneRequiredWithoutUserRoleNestedInputSchema';
import { rolesUpdateOneRequiredWithoutUserRoleNestedInputSchema } from './rolesUpdateOneRequiredWithoutUserRoleNestedInputSchema';

export const UserRoleUpdateInputSchema: z.ZodType<Prisma.UserRoleUpdateInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => usersUpdateOneRequiredWithoutUserRoleNestedInputSchema).optional(),
  role: z.lazy(() => rolesUpdateOneRequiredWithoutUserRoleNestedInputSchema).optional(),
});

export default UserRoleUpdateInputSchema;
