import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CardCommentUncheckedCreateWithoutUserInputSchema: z.ZodType<Prisma.CardCommentUncheckedCreateWithoutUserInput> = z.strictObject({
  id: z.uuid().optional(),
  cardId: z.string(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default CardCommentUncheckedCreateWithoutUserInputSchema;
