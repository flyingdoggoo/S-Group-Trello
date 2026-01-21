import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateNestedOneWithoutCardCommentInputSchema } from './usersCreateNestedOneWithoutCardCommentInputSchema';

export const CardCommentCreateWithoutCardInputSchema: z.ZodType<Prisma.CardCommentCreateWithoutCardInput> = z.strictObject({
  id: z.uuid().optional(),
  content: z.string(),
  createdAt: z.coerce.date().optional(),
  updatedAt: z.coerce.date().optional(),
  user: z.lazy(() => usersCreateNestedOneWithoutCardCommentInputSchema),
});

export default CardCommentCreateWithoutCardInputSchema;
