import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CardTagCreateManyCardInputSchema: z.ZodType<Prisma.CardTagCreateManyCardInput> = z.strictObject({
  id: z.uuid().optional(),
  name: z.string(),
  color: z.string(),
  createdAt: z.coerce.date().optional(),
});

export default CardTagCreateManyCardInputSchema;
