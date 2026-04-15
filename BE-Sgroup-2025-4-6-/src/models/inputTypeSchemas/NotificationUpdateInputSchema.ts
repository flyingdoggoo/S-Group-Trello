import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFieldUpdateOperationsInputSchema } from './StringFieldUpdateOperationsInputSchema';
import { NotificationTypeEnumSchema } from './NotificationTypeEnumSchema';
import { EnumNotificationTypeEnumFieldUpdateOperationsInputSchema } from './EnumNotificationTypeEnumFieldUpdateOperationsInputSchema';
import { BoolFieldUpdateOperationsInputSchema } from './BoolFieldUpdateOperationsInputSchema';
import { NullableDateTimeFieldUpdateOperationsInputSchema } from './NullableDateTimeFieldUpdateOperationsInputSchema';
import { DateTimeFieldUpdateOperationsInputSchema } from './DateTimeFieldUpdateOperationsInputSchema';
import { usersUpdateOneRequiredWithoutNotificationsNestedInputSchema } from './usersUpdateOneRequiredWithoutNotificationsNestedInputSchema';
import { usersUpdateOneWithoutActionsNestedInputSchema } from './usersUpdateOneWithoutActionsNestedInputSchema';
import { InvitationsUpdateOneWithoutNotificationsNestedInputSchema } from './InvitationsUpdateOneWithoutNotificationsNestedInputSchema';

export const NotificationUpdateInputSchema: z.ZodType<Prisma.NotificationUpdateInput> = z.strictObject({
  id: z.union([ z.uuid(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  type: z.union([ z.lazy(() => NotificationTypeEnumSchema), z.lazy(() => EnumNotificationTypeEnumFieldUpdateOperationsInputSchema) ]).optional(),
  title: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  message: z.union([ z.string(),z.lazy(() => StringFieldUpdateOperationsInputSchema) ]).optional(),
  isRead: z.union([ z.boolean(),z.lazy(() => BoolFieldUpdateOperationsInputSchema) ]).optional(),
  readAt: z.union([ z.coerce.date(),z.lazy(() => NullableDateTimeFieldUpdateOperationsInputSchema) ]).optional().nullable(),
  createdAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  updatedAt: z.union([ z.coerce.date(),z.lazy(() => DateTimeFieldUpdateOperationsInputSchema) ]).optional(),
  user: z.lazy(() => usersUpdateOneRequiredWithoutNotificationsNestedInputSchema).optional(),
  actor: z.lazy(() => usersUpdateOneWithoutActionsNestedInputSchema).optional(),
  invitation: z.lazy(() => InvitationsUpdateOneWithoutNotificationsNestedInputSchema).optional(),
});

export default NotificationUpdateInputSchema;
