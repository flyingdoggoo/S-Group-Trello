import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { CardMemberCountOrderByAggregateInputSchema } from './CardMemberCountOrderByAggregateInputSchema';
import { CardMemberMaxOrderByAggregateInputSchema } from './CardMemberMaxOrderByAggregateInputSchema';
import { CardMemberMinOrderByAggregateInputSchema } from './CardMemberMinOrderByAggregateInputSchema';

export const CardMemberOrderByWithAggregationInputSchema: z.ZodType<Prisma.CardMemberOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  cardId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  joinedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CardMemberCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CardMemberMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CardMemberMinOrderByAggregateInputSchema).optional(),
});

export default CardMemberOrderByWithAggregationInputSchema;
