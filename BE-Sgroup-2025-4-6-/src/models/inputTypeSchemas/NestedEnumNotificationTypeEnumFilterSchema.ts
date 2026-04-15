import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationTypeEnumSchema } from './NotificationTypeEnumSchema';

export const NestedEnumNotificationTypeEnumFilterSchema: z.ZodType<Prisma.NestedEnumNotificationTypeEnumFilter> = z.strictObject({
  equals: z.lazy(() => NotificationTypeEnumSchema).optional(),
  in: z.lazy(() => NotificationTypeEnumSchema).array().optional(),
  notIn: z.lazy(() => NotificationTypeEnumSchema).array().optional(),
  not: z.union([ z.lazy(() => NotificationTypeEnumSchema), z.lazy(() => NestedEnumNotificationTypeEnumFilterSchema) ]).optional(),
});

export default NestedEnumNotificationTypeEnumFilterSchema;
