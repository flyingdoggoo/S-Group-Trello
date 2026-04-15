import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { StringNullableFilterSchema } from './StringNullableFilterSchema';
import { EnumNotificationTypeEnumFilterSchema } from './EnumNotificationTypeEnumFilterSchema';
import { NotificationTypeEnumSchema } from './NotificationTypeEnumSchema';
import { BoolFilterSchema } from './BoolFilterSchema';
import { DateTimeNullableFilterSchema } from './DateTimeNullableFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const NotificationScalarWhereInputSchema: z.ZodType<Prisma.NotificationScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => NotificationScalarWhereInputSchema), z.lazy(() => NotificationScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => NotificationScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => NotificationScalarWhereInputSchema), z.lazy(() => NotificationScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  actorId: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  invitationId: z.union([ z.lazy(() => StringNullableFilterSchema), z.string() ]).optional().nullable(),
  type: z.union([ z.lazy(() => EnumNotificationTypeEnumFilterSchema), z.lazy(() => NotificationTypeEnumSchema) ]).optional(),
  title: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  message: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  isRead: z.union([ z.lazy(() => BoolFilterSchema), z.boolean() ]).optional(),
  readAt: z.union([ z.lazy(() => DateTimeNullableFilterSchema), z.coerce.date() ]).optional().nullable(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  updatedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
});

export default NotificationScalarWhereInputSchema;
