import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardIncludeSchema } from '../inputTypeSchemas/CardIncludeSchema'
import { CardWhereUniqueInputSchema } from '../inputTypeSchemas/CardWhereUniqueInputSchema'
import { CardCreateInputSchema } from '../inputTypeSchemas/CardCreateInputSchema'
import { CardUncheckedCreateInputSchema } from '../inputTypeSchemas/CardUncheckedCreateInputSchema'
import { CardUpdateInputSchema } from '../inputTypeSchemas/CardUpdateInputSchema'
import { CardUncheckedUpdateInputSchema } from '../inputTypeSchemas/CardUncheckedUpdateInputSchema'
import { ListArgsSchema } from "../outputTypeSchemas/ListArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CardSelectSchema: z.ZodType<Prisma.CardSelect> = z.object({
  id: z.boolean().optional(),
  listId: z.boolean().optional(),
  title: z.boolean().optional(),
  description: z.boolean().optional(),
  position: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  deletedAt: z.boolean().optional(),
  list: z.union([z.boolean(),z.lazy(() => ListArgsSchema)]).optional(),
}).strict()

export const CardUpsertArgsSchema: z.ZodType<Prisma.CardUpsertArgs> = z.object({
  select: CardSelectSchema.optional(),
  include: z.lazy(() => CardIncludeSchema).optional(),
  where: CardWhereUniqueInputSchema, 
  create: z.union([ CardCreateInputSchema, CardUncheckedCreateInputSchema ]),
  update: z.union([ CardUpdateInputSchema, CardUncheckedUpdateInputSchema ]),
}).strict();

export default CardUpsertArgsSchema;
