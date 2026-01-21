import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CardMemberCreateManyInputSchema: z.ZodType<Prisma.CardMemberCreateManyInput> = z.strictObject({
  id: z.uuid().optional(),
  cardId: z.string(),
  userId: z.string(),
  joinedAt: z.coerce.date().optional(),
});

export default CardMemberCreateManyInputSchema;
