import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InvitationsIncludeSchema } from '../inputTypeSchemas/InvitationsIncludeSchema'
import { InvitationsWhereUniqueInputSchema } from '../inputTypeSchemas/InvitationsWhereUniqueInputSchema'
import { InvitationsCreateInputSchema } from '../inputTypeSchemas/InvitationsCreateInputSchema'
import { InvitationsUncheckedCreateInputSchema } from '../inputTypeSchemas/InvitationsUncheckedCreateInputSchema'
import { InvitationsUpdateInputSchema } from '../inputTypeSchemas/InvitationsUpdateInputSchema'
import { InvitationsUncheckedUpdateInputSchema } from '../inputTypeSchemas/InvitationsUncheckedUpdateInputSchema'
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"
import { projectArgsSchema } from "../outputTypeSchemas/projectArgsSchema"
import { BoardArgsSchema } from "../outputTypeSchemas/BoardArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const InvitationsUpsertArgsSchema: z.ZodType<Prisma.InvitationsUpsertArgs> = z.object({
  select: InvitationsSelectSchema.optional(),
  include: z.lazy(() => InvitationsIncludeSchema).optional(),
  where: InvitationsWhereUniqueInputSchema, 
  create: z.union([ InvitationsCreateInputSchema, InvitationsUncheckedCreateInputSchema ]),
  update: z.union([ InvitationsUpdateInputSchema, InvitationsUncheckedUpdateInputSchema ]),
}).strict();

export default InvitationsUpsertArgsSchema;
