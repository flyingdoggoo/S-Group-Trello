import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationTypeEnumSchema } from './NotificationTypeEnumSchema';

export const NotificationCreateManyActorInputSchema: z.ZodType<Prisma.NotificationCreateManyActorInput> = z.strictObject({
  id: z.uuid().optional(),
  userId: z.string(),
  invitationId: z.string().optional().nullable(),
  type: z.lazy(() => NotificationTypeEnumSchema),
  title: z.string(),
  message: z.string(),
  isRead: z.boolean().optional(),
  readAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default NotificationCreateManyActorInputSchema;
