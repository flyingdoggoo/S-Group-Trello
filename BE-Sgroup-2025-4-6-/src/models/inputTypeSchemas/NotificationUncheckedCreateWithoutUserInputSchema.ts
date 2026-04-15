import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationTypeEnumSchema } from './NotificationTypeEnumSchema';

export const NotificationUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.NotificationUncheckedCreateWithoutUserInput> = z.strictObject({
  id: z.uuid().optional(),
  actorId: z.string().optional().nullable(),
  invitationId: z.string().optional().nullable(),
  type: z.lazy(() => NotificationTypeEnumSchema),
  title: z.string(),
  message: z.string(),
  isRead: z.boolean().optional(),
  readAt: z.coerce.date().optional().nullable(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default NotificationUncheckedCreateWithoutUserInputSchema;
