import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardArgsSchema } from "../outputTypeSchemas/CardArgsSchema"

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

export default CardTodoSelectSchema;
