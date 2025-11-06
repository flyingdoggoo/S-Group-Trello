import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ListIncludeSchema } from '../inputTypeSchemas/ListIncludeSchema'
import { ListUpdateInputSchema } from '../inputTypeSchemas/ListUpdateInputSchema'
import { ListUncheckedUpdateInputSchema } from '../inputTypeSchemas/ListUncheckedUpdateInputSchema'
import { ListWhereUniqueInputSchema } from '../inputTypeSchemas/ListWhereUniqueInputSchema'
import { BoardArgsSchema } from "../outputTypeSchemas/BoardArgsSchema"
import { CardFindManyArgsSchema } from "../outputTypeSchemas/CardFindManyArgsSchema"
import { ListCountOutputTypeArgsSchema } from "../outputTypeSchemas/ListCountOutputTypeArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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

export const ListUpdateArgsSchema: z.ZodType<Prisma.ListUpdateArgs> = z.object({
  select: ListSelectSchema.optional(),
  include: z.lazy(() => ListIncludeSchema).optional(),
  data: z.union([ ListUpdateInputSchema, ListUncheckedUpdateInputSchema ]),
  where: ListWhereUniqueInputSchema, 
}).strict();

export default ListUpdateArgsSchema;
