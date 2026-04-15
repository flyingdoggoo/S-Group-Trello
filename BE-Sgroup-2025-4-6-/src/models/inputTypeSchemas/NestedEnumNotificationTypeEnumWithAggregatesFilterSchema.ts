import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationTypeEnumSchema } from './NotificationTypeEnumSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumNotificationTypeEnumFilterSchema } from './NestedEnumNotificationTypeEnumFilterSchema';

export const NestedEnumNotificationTypeEnumWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumNotificationTypeEnumWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => NotificationTypeEnumSchema).optional(),
  in: z.lazy(() => NotificationTypeEnumSchema).array().optional(),
  notIn: z.lazy(() => NotificationTypeEnumSchema).array().optional(),
  not: z.union([ z.lazy(() => NotificationTypeEnumSchema), z.lazy(() => NestedEnumNotificationTypeEnumWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumNotificationTypeEnumFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumNotificationTypeEnumFilterSchema).optional(),
});

export default NestedEnumNotificationTypeEnumWithAggregatesFilterSchema;
