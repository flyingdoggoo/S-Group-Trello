import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BoardMemberIncludeSchema } from '../inputTypeSchemas/BoardMemberIncludeSchema'
import { BoardMemberWhereInputSchema } from '../inputTypeSchemas/BoardMemberWhereInputSchema'
import { BoardMemberOrderByWithRelationInputSchema } from '../inputTypeSchemas/BoardMemberOrderByWithRelationInputSchema'
import { BoardMemberWhereUniqueInputSchema } from '../inputTypeSchemas/BoardMemberWhereUniqueInputSchema'
import { BoardMemberScalarFieldEnumSchema } from '../inputTypeSchemas/BoardMemberScalarFieldEnumSchema'
import { BoardArgsSchema } from "../outputTypeSchemas/BoardArgsSchema"
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"
import { rolesArgsSchema } from "../outputTypeSchemas/rolesArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const BoardMemberSelectSchema: z.ZodType<Prisma.BoardMemberSelect> = z.object({
  id: z.boolean().optional(),
  boardId: z.boolean().optional(),
  userId: z.boolean().optional(),
  roleId: z.boolean().optional(),
  joinedAt: z.boolean().optional(),
  board: z.union([z.boolean(),z.lazy(() => BoardArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
  role: z.union([z.boolean(),z.lazy(() => rolesArgsSchema)]).optional(),
}).strict()

export const BoardMemberFindFirstOrThrowArgsSchema: z.ZodType<Prisma.BoardMemberFindFirstOrThrowArgs> = z.object({
  select: BoardMemberSelectSchema.optional(),
  include: z.lazy(() => BoardMemberIncludeSchema).optional(),
  where: BoardMemberWhereInputSchema.optional(), 
  orderBy: z.union([ BoardMemberOrderByWithRelationInputSchema.array(), BoardMemberOrderByWithRelationInputSchema ]).optional(),
  cursor: BoardMemberWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ BoardMemberScalarFieldEnumSchema, BoardMemberScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default BoardMemberFindFirstOrThrowArgsSchema;
