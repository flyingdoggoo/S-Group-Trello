import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardTodoIncludeSchema } from '../inputTypeSchemas/CardTodoIncludeSchema'
import { CardTodoCreateInputSchema } from '../inputTypeSchemas/CardTodoCreateInputSchema'
import { CardTodoUncheckedCreateInputSchema } from '../inputTypeSchemas/CardTodoUncheckedCreateInputSchema'
import { CardArgsSchema } from "../outputTypeSchemas/CardArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CardTodoSelectSchema: z.ZodType<Prisma.CardTodoSelect> = z.object({
  id: z.boolean().optional(),
  cardId: z.boolean().optional(),
  title: z.boolean().optional(),
  completed: z.boolean().optional(),
  position: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  card: z.union([z.boolean(),z.lazy(() => CardArgsSchema)]).optional(),
}).strict()

export const CardTodoCreateArgsSchema: z.ZodType<Prisma.CardTodoCreateArgs> = z.object({
  select: CardTodoSelectSchema.optional(),
  include: z.lazy(() => CardTodoIncludeSchema).optional(),
  data: z.union([ CardTodoCreateInputSchema, CardTodoUncheckedCreateInputSchema ]),
}).strict();

export default CardTodoCreateArgsSchema;
