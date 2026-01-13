import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BoardIncludeSchema } from '../inputTypeSchemas/BoardIncludeSchema'
import { BoardUpdateInputSchema } from '../inputTypeSchemas/BoardUpdateInputSchema'
import { BoardUncheckedUpdateInputSchema } from '../inputTypeSchemas/BoardUncheckedUpdateInputSchema'
import { BoardWhereUniqueInputSchema } from '../inputTypeSchemas/BoardWhereUniqueInputSchema'
import { projectArgsSchema } from "../outputTypeSchemas/projectArgsSchema"
import { ListFindManyArgsSchema } from "../outputTypeSchemas/ListFindManyArgsSchema"
import { InvitationsFindManyArgsSchema } from "../outputTypeSchemas/InvitationsFindManyArgsSchema"
import { BoardMemberFindManyArgsSchema } from "../outputTypeSchemas/BoardMemberFindManyArgsSchema"
import { BoardCountOutputTypeArgsSchema } from "../outputTypeSchemas/BoardCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BoardSelectSchema: z.ZodType<Prisma.BoardSelect> = z.object({
  id: z.boolean().optional(),
  projectId: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  status: z.boolean().optional(),
  coverUrl: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  project: z.union([z.boolean(),z.lazy(() => projectArgsSchema)]).optional(),
  List: z.union([z.boolean(),z.lazy(() => ListFindManyArgsSchema)]).optional(),
  invitation: z.union([z.boolean(),z.lazy(() => InvitationsFindManyArgsSchema)]).optional(),
  BoardMember: z.union([z.boolean(),z.lazy(() => BoardMemberFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BoardCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const BoardUpdateArgsSchema: z.ZodType<Prisma.BoardUpdateArgs> = z.object({
  select: BoardSelectSchema.optional(),
  include: z.lazy(() => BoardIncludeSchema).optional(),
  data: z.union([ BoardUpdateInputSchema, BoardUncheckedUpdateInputSchema ]),
  where: BoardWhereUniqueInputSchema, 
}).strict();

export default BoardUpdateArgsSchema;
