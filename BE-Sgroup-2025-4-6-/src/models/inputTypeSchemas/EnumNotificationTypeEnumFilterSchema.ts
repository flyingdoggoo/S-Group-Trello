import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationTypeEnumSchema } from './NotificationTypeEnumSchema';
import { NestedEnumNotificationTypeEnumFilterSchema } from './NestedEnumNotificationTypeEnumFilterSchema';

export const EnumNotificationTypeEnumFilterSchema: z.ZodType<Prisma.EnumNotificationTypeEnumFilter> = z.strictObject({
  equals: z.lazy(() => NotificationTypeEnumSchema).optional(),
  in: z.lazy(() => NotificationTypeEnumSchema).array().optional(),
  notIn: z.lazy(() => NotificationTypeEnumSchema).array().optional(),
  not: z.union([ z.lazy(() => NotificationTypeEnumSchema), z.lazy(() => NestedEnumNotificationTypeEnumFilterSchema) ]).optional(),
});

export default EnumNotificationTypeEnumFilterSchema;
