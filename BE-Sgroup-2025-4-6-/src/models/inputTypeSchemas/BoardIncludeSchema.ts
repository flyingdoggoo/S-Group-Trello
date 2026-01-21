import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { projectArgsSchema } from "../outputTypeSchemas/projectArgsSchema"
import { ListFindManyArgsSchema } from "../outputTypeSchemas/ListFindManyArgsSchema"
import { InvitationsFindManyArgsSchema } from "../outputTypeSchemas/InvitationsFindManyArgsSchema"
import { BoardMemberFindManyArgsSchema } from "../outputTypeSchemas/BoardMemberFindManyArgsSchema"
import { BoardCountOutputTypeArgsSchema } from "../outputTypeSchemas/BoardCountOutputTypeArgsSchema"

export const BoardIncludeSchema: z.ZodType<Prisma.BoardInclude> = z.object({
  project: z.union([z.boolean(),z.lazy(() => projectArgsSchema)]).optional(),
  List: z.union([z.boolean(),z.lazy(() => ListFindManyArgsSchema)]).optional(),
  invitation: z.union([z.boolean(),z.lazy(() => InvitationsFindManyArgsSchema)]).optional(),
  BoardMember: z.union([z.boolean(),z.lazy(() => BoardMemberFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => BoardCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default BoardIncludeSchema;
