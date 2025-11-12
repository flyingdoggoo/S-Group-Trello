import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardIncludeSchema } from '../inputTypeSchemas/CardIncludeSchema'
import { CardUpdateInputSchema } from '../inputTypeSchemas/CardUpdateInputSchema'
import { CardUncheckedUpdateInputSchema } from '../inputTypeSchemas/CardUncheckedUpdateInputSchema'
import { CardWhereUniqueInputSchema } from '../inputTypeSchemas/CardWhereUniqueInputSchema'
import { ListArgsSchema } from "../outputTypeSchemas/ListArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

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
}).strict()

export const CardUpdateArgsSchema: z.ZodType<Prisma.CardUpdateArgs> = z.object({
  select: CardSelectSchema.optional(),
  include: z.lazy(() => CardIncludeSchema).optional(),
  data: z.union([ CardUpdateInputSchema, CardUncheckedUpdateInputSchema ]),
  where: CardWhereUniqueInputSchema, 
}).strict();

export default CardUpdateArgsSchema;
