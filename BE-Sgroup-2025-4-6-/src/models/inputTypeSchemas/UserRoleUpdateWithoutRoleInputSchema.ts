import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { usersUpdateOneRequiredWithoutUserRoleNestedInputSchema } from './usersUpdateOneRequiredWithoutUserRoleNestedInputSchema';

export const UserRoleUpdateWithoutRoleInputSchema: z.ZodType<Prisma.UserRoleUpdateWithoutRoleInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  assignedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => usersUpdateOneRequiredWithoutUserRoleNestedInputSchema).optional(),
});

export default UserRoleUpdateWithoutRoleInputSchema;
