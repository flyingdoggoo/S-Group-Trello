import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardCreateNestedOneWithoutCommentsInputSchema } from './CardCreateNestedOneWithoutCommentsInputSchema';

export const CardCommentCreateWithoutUserInputSchema: z.ZodType<Prisma.CardCommentCreateWithoutUserInput> = z.strictObject({
  id: z.uuid().optional(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  card: z.lazy(() => CardCreateNestedOneWithoutCommentsInputSchema),
});

export default CardCommentCreateWithoutUserInputSchema;
