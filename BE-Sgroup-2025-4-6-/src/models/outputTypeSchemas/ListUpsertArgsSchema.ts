import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ListIncludeSchema } from '../inputTypeSchemas/ListIncludeSchema'
import { ListWhereUniqueInputSchema } from '../inputTypeSchemas/ListWhereUniqueInputSchema'
import { ListCreateInputSchema } from '../inputTypeSchemas/ListCreateInputSchema'
import { ListUncheckedCreateInputSchema } from '../inputTypeSchemas/ListUncheckedCreateInputSchema'
import { ListUpdateInputSchema } from '../inputTypeSchemas/ListUpdateInputSchema'
import { ListUncheckedUpdateInputSchema } from '../inputTypeSchemas/ListUncheckedUpdateInputSchema'
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
  status: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  board: z.union([z.boolean(),z.lazy(() => BoardArgsSchema)]).optional(),
  Card: z.union([z.boolean(),z.lazy(() => CardFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ListCountOutputTypeArgsSchema)]).optional(),
}).strict()

export const ListUpsertArgsSchema: z.ZodType<Prisma.ListUpsertArgs> = z.object({
  select: ListSelectSchema.optional(),
  include: z.lazy(() => ListIncludeSchema).optional(),
  where: ListWhereUniqueInputSchema, 
  create: z.union([ ListCreateInputSchema, ListUncheckedCreateInputSchema ]),
  update: z.union([ ListUpdateInputSchema, ListUncheckedUpdateInputSchema ]),
}).strict();

export default ListUpsertArgsSchema;
