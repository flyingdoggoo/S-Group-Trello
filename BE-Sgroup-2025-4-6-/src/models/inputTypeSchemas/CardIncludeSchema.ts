import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ListArgsSchema } from "../outputTypeSchemas/ListArgsSchema"
import { CardTagFindManyArgsSchema } from "../outputTypeSchemas/CardTagFindManyArgsSchema"
import { CardTodoFindManyArgsSchema } from "../outputTypeSchemas/CardTodoFindManyArgsSchema"
import { CardMemberFindManyArgsSchema } from "../outputTypeSchemas/CardMemberFindManyArgsSchema"
import { CardCommentFindManyArgsSchema } from "../outputTypeSchemas/CardCommentFindManyArgsSchema"
import { CardCountOutputTypeArgsSchema } from "../outputTypeSchemas/CardCountOutputTypeArgsSchema"

export const CardIncludeSchema: z.ZodType<Prisma.CardInclude> = z.object({
  list: z.union([z.boolean(),z.lazy(() => ListArgsSchema)]).optional(),
  tags: z.union([z.boolean(),z.lazy(() => CardTagFindManyArgsSchema)]).optional(),
  todos: z.union([z.boolean(),z.lazy(() => CardTodoFindManyArgsSchema)]).optional(),
  members: z.union([z.boolean(),z.lazy(() => CardMemberFindManyArgsSchema)]).optional(),
  comments: z.union([z.boolean(),z.lazy(() => CardCommentFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CardCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default CardIncludeSchema;
