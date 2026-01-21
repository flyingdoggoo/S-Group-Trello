import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ListArgsSchema } from "../outputTypeSchemas/ListArgsSchema"
import { CardTagFindManyArgsSchema } from "../outputTypeSchemas/CardTagFindManyArgsSchema"
import { CardTodoFindManyArgsSchema } from "../outputTypeSchemas/CardTodoFindManyArgsSchema"
import { CardMemberFindManyArgsSchema } from "../outputTypeSchemas/CardMemberFindManyArgsSchema"
import { CardCommentFindManyArgsSchema } from "../outputTypeSchemas/CardCommentFindManyArgsSchema"
import { CardCountOutputTypeArgsSchema } from "../outputTypeSchemas/CardCountOutputTypeArgsSchema"

export const CardSelectSchema: z.ZodType<Prisma.CardSelect> = z.object({
  id: z.boolean().optional(),
  listId: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  position: z.boolean().optional(),
  status: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  list: z.union([z.boolean(),z.lazy(() => ListArgsSchema)]).optional(),
  tags: z.union([z.boolean(),z.lazy(() => CardTagFindManyArgsSchema)]).optional(),
  todos: z.union([z.boolean(),z.lazy(() => CardTodoFindManyArgsSchema)]).optional(),
  members: z.union([z.boolean(),z.lazy(() => CardMemberFindManyArgsSchema)]).optional(),
  comments: z.union([z.boolean(),z.lazy(() => CardCommentFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => CardCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default CardSelectSchema;
