import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BoardArgsSchema } from "../outputTypeSchemas/BoardArgsSchema"
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"
import { rolesArgsSchema } from "../outputTypeSchemas/rolesArgsSchema"

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

export default BoardMemberSelectSchema;
