import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CardMemberUncheckedCreateInputSchema: z.ZodType<Prisma.CardMemberUncheckedCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  cardId: z.string(),
  userId: z.string(),
  joinedAt: z.coerce.date().optional(),
});

export default CardMemberUncheckedCreateInputSchema;
