import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardCreateNestedOneWithoutTodosInputSchema } from './CardCreateNestedOneWithoutTodosInputSchema';

export const CardTodoCreateInputSchema: z.ZodType<Prisma.CardTodoCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  title: z.string(),
  completed: z.boolean().optional(),
  position: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  card: z.lazy(() => CardCreateNestedOneWithoutTodosInputSchema),
});

export default CardTodoCreateInputSchema;
