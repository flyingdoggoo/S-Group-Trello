import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { CardOrderByWithRelationInputSchema } from './CardOrderByWithRelationInputSchema';
import { usersOrderByWithRelationInputSchema } from './usersOrderByWithRelationInputSchema';

export const CardCommentOrderByWithRelationInputSchema: z.ZodType<Prisma.CardCommentOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  cardId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  content: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  card: z.lazy(() => CardOrderByWithRelationInputSchema).optional(),
  user: z.lazy(() => usersOrderByWithRelationInputSchema).optional(),
});

export default CardCommentOrderByWithRelationInputSchema;
