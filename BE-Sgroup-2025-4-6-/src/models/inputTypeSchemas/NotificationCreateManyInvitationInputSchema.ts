import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationTypeEnumSchema } from './NotificationTypeEnumSchema';

export const NotificationCreateManyInvitationInputSchema: z.ZodType<Prisma.NotificationCreateManyInvitationInput> = z.strictObject({
  id: z.uuid().optional(),
  userId: z.string(),
  actorId: z.string().optional().nullable(),
  type: z.lazy(() => NotificationTypeEnumSchema),
  title: z.string(),
  message: z.string(),
  isRead: z.boolean().optional(),
  readAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default NotificationCreateManyInvitationInputSchema;
