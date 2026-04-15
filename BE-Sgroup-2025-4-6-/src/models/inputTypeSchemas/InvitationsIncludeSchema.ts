import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"
import { projectArgsSchema } from "../outputTypeSchemas/projectArgsSchema"
import { BoardArgsSchema } from "../outputTypeSchemas/BoardArgsSchema"
import { NotificationFindManyArgsSchema } from "../outputTypeSchemas/NotificationFindManyArgsSchema"
import { InvitationsCountOutputTypeArgsSchema } from "../outputTypeSchemas/InvitationsCountOutputTypeArgsSchema"

export const InvitationsIncludeSchema: z.ZodType<Prisma.InvitationsInclude> = z.object({
  owner: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
  project: z.union([z.boolean(),z.lazy(() => projectArgsSchema)]).optional(),
  board: z.union([z.boolean(),z.lazy(() => BoardArgsSchema)]).optional(),
  notifications: z.union([z.boolean(),z.lazy(() => NotificationFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => InvitationsCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default InvitationsIncludeSchema;
