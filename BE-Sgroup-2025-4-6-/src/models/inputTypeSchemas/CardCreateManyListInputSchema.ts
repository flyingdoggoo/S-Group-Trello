import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CardCreateManyListInputSchema: z.ZodType<Prisma.CardCreateManyListInput> = z.strictObject({
  id: z.uuid().optional(),
  title: z.string(),
  description: z.string().optional().nullable(),
  position: z.number().int(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  deletedAt: z.coerce.date().optional().nullable(),
});

export default CardCreateManyListInputSchema;
