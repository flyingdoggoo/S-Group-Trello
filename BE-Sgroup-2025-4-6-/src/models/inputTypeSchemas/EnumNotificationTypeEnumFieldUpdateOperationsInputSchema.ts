import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationTypeEnumSchema } from './NotificationTypeEnumSchema';

export const EnumNotificationTypeEnumFieldUpdateOperationsInputSchema: z.ZodType<Prisma.EnumNotificationTypeEnumFieldUpdateOperationsInput> = z.strictObject({
  set: z.lazy(() => NotificationTypeEnumSchema).optional(),
});

export default EnumNotificationTypeEnumFieldUpdateOperationsInputSchema;
