import type { Prisma } from '@prisma/client';

import { z } from 'zod';

export const CardCommentCreateManyCardInputSchema: z.ZodType<Prisma.CardCommentCreateManyCardInput> = z.strictObject({
  id: z.uuid().optional(),
  userId: z.string(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
});

export default CardCommentCreateManyCardInputSchema;
