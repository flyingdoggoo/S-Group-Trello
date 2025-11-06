import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BoardIncludeSchema } from '../inputTypeSchemas/BoardIncludeSchema'
import { BoardWhereInputSchema } from '../inputTypeSchemas/BoardWhereInputSchema'
import { BoardOrderByWithRelationInputSchema } from '../inputTypeSchemas/BoardOrderByWithRelationInputSchema'
import { BoardWhereUniqueInputSchema } from '../inputTypeSchemas/BoardWhereUniqueInputSchema'
import { BoardScalarFieldEnumSchema } from '../inputTypeSchemas/BoardScalarFieldEnumSchema'
import { projectArgsSchema } from "../outputTypeSchemas/projectArgsSchema"
import { ListFindManyArgsSchema } from "../outputTypeSchemas/ListFindManyArgsSchema"
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
  BoardMember: z.union([z.boolean(),z.lazy(() => BoardMemberFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BoardCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const BoardFindManyArgsSchema: z.ZodType<Prisma.BoardFindManyArgs> = z.object({
  select: BoardSelectSchema.optional(),
  include: z.lazy(() => BoardIncludeSchema).optional(),
  where: BoardWhereInputSchema.optional(), 
  orderBy: z.union([ BoardOrderByWithRelationInputSchema.array(), BoardOrderByWithRelationInputSchema ]).optional(),
  cursor: BoardWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BoardScalarFieldEnumSchema, BoardScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default BoardFindManyArgsSchema;
