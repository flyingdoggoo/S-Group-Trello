import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"
import { projectArgsSchema } from "../outputTypeSchemas/projectArgsSchema"
import { BoardArgsSchema } from "../outputTypeSchemas/BoardArgsSchema"

export const InvitationsSelectSchema: z.ZodType<Prisma.InvitationsSelect> = z.object({
  id: z.boolean().optional(),
  projectId: z.boolean().optional(),
  boardId: z.boolean().optional(),
  email: z.boolean().optional(),
  roleId: z.boolean().optional(),
  token: z.boolean().optional(),
  status: z.boolean().optional(),
  createdBy: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  expiresAt: z.boolean().optional(),
  acceptedAt: z.boolean().optional(),
  owner: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
  project: z.union([z.boolean(),z.lazy(() => projectArgsSchema)]).optional(),
  board: z.union([z.boolean(),z.lazy(() => BoardArgsSchema)]).optional(),
}).strict()

export default InvitationsSelectSchema;
