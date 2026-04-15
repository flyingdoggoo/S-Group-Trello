import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationTypeEnumSchema } from './NotificationTypeEnumSchema';
import { usersCreateNestedOneWithoutNotificationsInputSchema } from './usersCreateNestedOneWithoutNotificationsInputSchema';
import { InvitationsCreateNestedOneWithoutNotificationsInputSchema } from './InvitationsCreateNestedOneWithoutNotificationsInputSchema';

export const NotificationCreateWithoutActorInputSchema: z.ZodType<Prisma.NotificationCreateWithoutActorInput> = z.strictObject({
  id: z.uuid().optional(),
  type: z.lazy(() => NotificationTypeEnumSchema),
  title: z.string(),
  message: z.string(),
  isRead: z.boolean().optional(),
  readAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => usersCreateNestedOneWithoutNotificationsInputSchema),
  invitation: z.lazy(() => InvitationsCreateNestedOneWithoutNotificationsInputSchema).optional(),
});

export default NotificationCreateWithoutActorInputSchema;
