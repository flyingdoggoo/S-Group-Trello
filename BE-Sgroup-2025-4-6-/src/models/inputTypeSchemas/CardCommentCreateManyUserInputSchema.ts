import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CardCommentCreateManyUserInputSchema: z.ZodType<Prisma.CardCommentCreateManyUserInput> = z.strictObject({
  id: z.uuid().optional(),
  cardId: z.string(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default CardCommentCreateManyUserInputSchema;
