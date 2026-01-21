import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CardMemberCreateManyCardInputSchema: z.ZodType<Prisma.CardMemberCreateManyCardInput> = z.strictObject({
  id: z.uuid().optional(),
  userId: z.string(),
  joinedAt: z.coerce.date().optional(),
});

export default CardMemberCreateManyCardInputSchema;
