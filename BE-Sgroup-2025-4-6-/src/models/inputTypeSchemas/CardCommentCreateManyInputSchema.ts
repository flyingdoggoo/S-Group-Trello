import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CardCommentCreateManyInputSchema: z.ZodType<Prisma.CardCommentCreateManyInput> = z.strictObject({
  id: z.uuid().optional(),
  cardId: z.string(),
  userId: z.string(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default CardCommentCreateManyInputSchema;
