import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CardMemberUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.CardMemberUncheckedCreateWithoutUserInput> = z.strictObject({
  id: z.uuid().optional(),
  cardId: z.string(),
  joinedAt: z.coerce.date().optional(),
});

export default CardMemberUncheckedCreateWithoutUserInputSchema;
