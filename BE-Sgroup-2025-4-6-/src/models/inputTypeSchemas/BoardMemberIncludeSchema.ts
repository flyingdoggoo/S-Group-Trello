import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BoardArgsSchema } from "../outputTypeSchemas/BoardArgsSchema"
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"
import { rolesArgsSchema } from "../outputTypeSchemas/rolesArgsSchema"

export const BoardMemberIncludeSchema: z.ZodType<Prisma.BoardMemberInclude> = z.object({
  board: z.union([z.boolean(),z.lazy(() => BoardArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
  role: z.union([z.boolean(),z.lazy(() => rolesArgsSchema)]).optional(),
}).strict();

export default BoardMemberIncludeSchema;
