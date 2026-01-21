import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CardMemberMaxOrderByAggregateInputSchema: z.ZodType<Prisma.CardMemberMaxOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  cardId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  joinedAt: z.lazy(() => SortOrderSchema).optional(),
});

export default CardMemberMaxOrderByAggregateInputSchema;
