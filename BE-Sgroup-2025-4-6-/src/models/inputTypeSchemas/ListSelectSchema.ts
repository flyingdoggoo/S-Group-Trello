import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BoardArgsSchema } from "../outputTypeSchemas/BoardArgsSchema"
import { CardFindManyArgsSchema } from "../outputTypeSchemas/CardFindManyArgsSchema"
import { ListCountOutputTypeArgsSchema } from "../outputTypeSchemas/ListCountOutputTypeArgsSchema"

export const ListSelectSchema: z.ZodType<Prisma.ListSelect> = z.object({
  id: z.boolean().optional(),
  boardId: z.boolean().optional(),
  title: z.boolean().optional(),
  position: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  board: z.union([z.boolean(),z.lazy(() => BoardArgsSchema)]).optional(),
  Card: z.union([z.boolean(),z.lazy(() => CardFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ListCountOutputTypeArgsSchema)]).optional(),
}).strict()

export default ListSelectSchema;
