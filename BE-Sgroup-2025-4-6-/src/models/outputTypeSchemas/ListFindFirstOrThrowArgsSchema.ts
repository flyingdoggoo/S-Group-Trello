import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ListIncludeSchema } from '../inputTypeSchemas/ListIncludeSchema'
import { ListWhereInputSchema } from '../inputTypeSchemas/ListWhereInputSchema'
import { ListOrderByWithRelationInputSchema } from '../inputTypeSchemas/ListOrderByWithRelationInputSchema'
import { ListWhereUniqueInputSchema } from '../inputTypeSchemas/ListWhereUniqueInputSchema'
import { ListScalarFieldEnumSchema } from '../inputTypeSchemas/ListScalarFieldEnumSchema'
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

export const ListFindFirstOrThrowArgsSchema: z.ZodType<Prisma.ListFindFirstOrThrowArgs> = z.object({
  select: ListSelectSchema.optional(),
  include: z.lazy(() => ListIncludeSchema).optional(),
  where: ListWhereInputSchema.optional(), 
  orderBy: z.union([ ListOrderByWithRelationInputSchema.array(), ListOrderByWithRelationInputSchema ]).optional(),
  cursor: ListWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ ListScalarFieldEnumSchema, ListScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default ListFindFirstOrThrowArgsSchema;
