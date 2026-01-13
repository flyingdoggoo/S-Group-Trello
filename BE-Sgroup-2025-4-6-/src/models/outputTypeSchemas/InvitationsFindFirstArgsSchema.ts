import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InvitationsIncludeSchema } from '../inputTypeSchemas/InvitationsIncludeSchema'
import { InvitationsWhereInputSchema } from '../inputTypeSchemas/InvitationsWhereInputSchema'
import { InvitationsOrderByWithRelationInputSchema } from '../inputTypeSchemas/InvitationsOrderByWithRelationInputSchema'
import { InvitationsWhereUniqueInputSchema } from '../inputTypeSchemas/InvitationsWhereUniqueInputSchema'
import { InvitationsScalarFieldEnumSchema } from '../inputTypeSchemas/InvitationsScalarFieldEnumSchema'
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

export const InvitationsFindFirstArgsSchema: z.ZodType<Prisma.InvitationsFindFirstArgs> = z.object({
  select: InvitationsSelectSchema.optional(),
  include: z.lazy(() => InvitationsIncludeSchema).optional(),
  where: InvitationsWhereInputSchema.optional(), 
  orderBy: z.union([ InvitationsOrderByWithRelationInputSchema.array(), InvitationsOrderByWithRelationInputSchema ]).optional(),
  cursor: InvitationsWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ InvitationsScalarFieldEnumSchema, InvitationsScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default InvitationsFindFirstArgsSchema;
