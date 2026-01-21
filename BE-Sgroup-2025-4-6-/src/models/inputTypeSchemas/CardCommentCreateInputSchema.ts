import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardCreateNestedOneWithoutCommentsInputSchema } from './CardCreateNestedOneWithoutCommentsInputSchema';
import { usersCreateNestedOneWithoutCardCommentInputSchema } from './usersCreateNestedOneWithoutCardCommentInputSchema';

export const CardCommentCreateInputSchema: z.ZodType<Prisma.CardCommentCreateInput> = z.strictObject({
  id: z.uuid().optional(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  card: z.lazy(() => CardCreateNestedOneWithoutCommentsInputSchema),
  user: z.lazy(() => usersCreateNestedOneWithoutCardCommentInputSchema),
});

export default CardCommentCreateInputSchema;
