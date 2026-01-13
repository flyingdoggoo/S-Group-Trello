import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"
import { projectArgsSchema } from "../outputTypeSchemas/projectArgsSchema"
import { BoardArgsSchema } from "../outputTypeSchemas/BoardArgsSchema"

export const InvitationsIncludeSchema: z.ZodType<Prisma.InvitationsInclude> = z.object({
  owner: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
  project: z.union([z.boolean(),z.lazy(() => projectArgsSchema)]).optional(),
  board: z.union([z.boolean(),z.lazy(() => BoardArgsSchema)]).optional(),
}).strict();

export default InvitationsIncludeSchema;
