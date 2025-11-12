import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardIncludeSchema } from '../inputTypeSchemas/CardIncludeSchema'
import { CardCreateInputSchema } from '../inputTypeSchemas/CardCreateInputSchema'
import { CardUncheckedCreateInputSchema } from '../inputTypeSchemas/CardUncheckedCreateInputSchema'
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

export const CardCreateArgsSchema: z.ZodType<Prisma.CardCreateArgs> = z.object({
  select: CardSelectSchema.optional(),
  include: z.lazy(() => CardIncludeSchema).optional(),
  data: z.union([ CardCreateInputSchema, CardUncheckedCreateInputSchema ]),
}).strict();

export default CardCreateArgsSchema;
