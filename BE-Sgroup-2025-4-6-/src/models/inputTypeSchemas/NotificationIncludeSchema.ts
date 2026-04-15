import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"
import { InvitationsArgsSchema } from "../outputTypeSchemas/InvitationsArgsSchema"

export const NotificationIncludeSchema: z.ZodType<Prisma.NotificationInclude> = z.object({
  user: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
  actor: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
  invitation: z.union([z.boolean(),z.lazy(() => InvitationsArgsSchema)]).optional(),
}).strict();

export default NotificationIncludeSchema;
