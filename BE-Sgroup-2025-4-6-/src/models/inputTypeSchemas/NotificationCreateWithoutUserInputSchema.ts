import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationTypeEnumSchema } from './NotificationTypeEnumSchema';
import { usersCreateNestedOneWithoutActionsInputSchema } from './usersCreateNestedOneWithoutActionsInputSchema';
import { InvitationsCreateNestedOneWithoutNotificationsInputSchema } from './InvitationsCreateNestedOneWithoutNotificationsInputSchema';

export const NotificationCreateWithoutUserInputSchema: z.ZodType<Prisma.NotificationCreateWithoutUserInput> = z.strictObject({
  id: z.uuid().optional(),
  type: z.lazy(() => NotificationTypeEnumSchema),
  title: z.string(),
  message: z.string(),
  isRead: z.boolean().optional(),
  readAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  actor: z.lazy(() => usersCreateNestedOneWithoutActionsInputSchema).optional(),
  invitation: z.lazy(() => InvitationsCreateNestedOneWithoutNotificationsInputSchema).optional(),
});

export default NotificationCreateWithoutUserInputSchema;
