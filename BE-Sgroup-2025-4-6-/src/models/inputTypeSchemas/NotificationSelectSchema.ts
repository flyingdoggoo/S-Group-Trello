import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"
import { InvitationsArgsSchema } from "../outputTypeSchemas/InvitationsArgsSchema"

export const NotificationSelectSchema: z.ZodType<Prisma.NotificationSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  actorId: z.boolean().optional(),
  invitationId: z.boolean().optional(),
  type: z.boolean().optional(),
  title: z.boolean().optional(),
  message: z.boolean().optional(),
  isRead: z.boolean().optional(),
  readAt: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
  actor: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
  invitation: z.union([z.boolean(),z.lazy(() => InvitationsArgsSchema)]).optional(),
}).strict()

export default NotificationSelectSchema;
