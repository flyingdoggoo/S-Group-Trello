import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserStatusEnumSchema } from './UserStatusEnumSchema';

export const EnumUserStatusEnumFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumUserStatusEnumFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => UserStatusEnumSchema).optional(),
});

export default EnumUserStatusEnumFieldUpdateOperationsInputSchema;
