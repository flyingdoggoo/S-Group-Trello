import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CardMemberCreateManyUserInputSchema: z.ZodType<Prisma.CardMemberCreateManyUserInput> = z.strictObject({
  id: z.uuid().optional(),
  cardId: z.string(),
  joinedAt: z.coerce.date().optional(),
});

export default CardMemberCreateManyUserInputSchema;
