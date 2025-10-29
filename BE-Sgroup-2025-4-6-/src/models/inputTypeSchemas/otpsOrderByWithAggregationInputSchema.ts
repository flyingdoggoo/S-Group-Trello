import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { otpsCountOrderByAggregateInputSchema } from './otpsCountOrderByAggregateInputSchema';
import { otpsMaxOrderByAggregateInputSchema } from './otpsMaxOrderByAggregateInputSchema';
import { otpsMinOrderByAggregateInputSchema } from './otpsMinOrderByAggregateInputSchema';

export const otpsOrderByWithAggregationInputSchema: z.ZodType<Prisma.otpsOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  otp: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => otpsCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => otpsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => otpsMinOrderByAggregateInputSchema).optional(),
});

export default otpsOrderByWithAggregationInputSchema;
