import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardTodoIncludeSchema } from '../inputTypeSchemas/CardTodoIncludeSchema'
import { CardTodoWhereUniqueInputSchema } from '../inputTypeSchemas/CardTodoWhereUniqueInputSchema'
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

export const CardTodoFindUniqueArgsSchema: z.ZodType<Prisma.CardTodoFindUniqueArgs> = z.object({
  select: CardTodoSelectSchema.optional(),
  include: z.lazy(() => CardTodoIncludeSchema).optional(),
  where: CardTodoWhereUniqueInputSchema, 
}).strict();

export default CardTodoFindUniqueArgsSchema;
