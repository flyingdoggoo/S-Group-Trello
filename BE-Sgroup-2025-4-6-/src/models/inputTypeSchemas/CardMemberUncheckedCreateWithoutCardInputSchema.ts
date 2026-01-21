import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CardMemberUncheckedCreateWithoutCardInputSchema: z.ZodType<Prisma.CardMemberUncheckedCreateWithoutCardInput> = z.strictObject({
  id: z.uuid().optional(),
  userId: z.string(),
  joinedAt: z.coerce.date().optional(),
});

export default CardMemberUncheckedCreateWithoutCardInputSchema;
