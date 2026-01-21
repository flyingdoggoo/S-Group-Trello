import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CardTodoCreateManyInputSchema: z.ZodType<Prisma.CardTodoCreateManyInput> = z.strictObject({
  id: z.uuid().optional(),
  cardId: z.string(),
  title: z.string(),
  completed: z.boolean().optional(),
  position: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default CardTodoCreateManyInputSchema;
