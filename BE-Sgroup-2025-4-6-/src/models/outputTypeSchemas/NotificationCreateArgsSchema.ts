import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { NotificationIncludeSchema } from '../inputTypeSchemas/NotificationIncludeSchema'
import { NotificationCreateInputSchema } from '../inputTypeSchemas/NotificationCreateInputSchema'
import { NotificationUncheckedCreateInputSchema } from '../inputTypeSchemas/NotificationUncheckedCreateInputSchema'
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"
import { InvitationsArgsSchema } from "../outputTypeSchemas/InvitationsArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const NotificationCreateArgsSchema: z.ZodType<Prisma.NotificationCreateArgs> = z.object({
  select: NotificationSelectSchema.optional(),
  include: z.lazy(() => NotificationIncludeSchema).optional(),
  data: z.union([ NotificationCreateInputSchema, NotificationUncheckedCreateInputSchema ]),
}).strict();

export default NotificationCreateArgsSchema;
