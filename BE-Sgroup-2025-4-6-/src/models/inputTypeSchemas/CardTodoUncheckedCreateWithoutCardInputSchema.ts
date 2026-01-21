import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CardTodoUncheckedCreateWithoutCardInputSchema: z.ZodType<Prisma.CardTodoUncheckedCreateWithoutCardInput> = z.strictObject({
  id: z.uuid().optional(),
  title: z.string(),
  completed: z.boolean().optional(),
  position: z.number().int().optional(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default CardTodoUncheckedCreateWithoutCardInputSchema;
