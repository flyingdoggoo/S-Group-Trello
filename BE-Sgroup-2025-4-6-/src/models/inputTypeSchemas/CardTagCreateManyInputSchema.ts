import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CardTagCreateManyInputSchema: z.ZodType<Prisma.CardTagCreateManyInput> = z.strictObject({
  id: z.uuid().optional(),
  cardId: z.string(),
  name: z.string(),
  color: z.string(),
  createdAt: z.coerce.date().optional(),
});

export default CardTagCreateManyInputSchema;
