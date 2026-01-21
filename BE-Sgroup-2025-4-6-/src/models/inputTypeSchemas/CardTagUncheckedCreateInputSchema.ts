import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CardTagUncheckedCreateInputSchema: z.ZodType<Prisma.CardTagUncheckedCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  cardId: z.string(),
  name: z.string(),
  color: z.string(),
  createdAt: z.coerce.date().optional(),
});

export default CardTagUncheckedCreateInputSchema;
