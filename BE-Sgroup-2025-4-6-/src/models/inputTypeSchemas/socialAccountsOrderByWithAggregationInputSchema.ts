import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { socialAccountsCountOrderByAggregateInputSchema } from './socialAccountsCountOrderByAggregateInputSchema';
import { socialAccountsMaxOrderByAggregateInputSchema } from './socialAccountsMaxOrderByAggregateInputSchema';
import { socialAccountsMinOrderByAggregateInputSchema } from './socialAccountsMinOrderByAggregateInputSchema';

export const socialAccountsOrderByWithAggregationInputSchema: z.ZodType<Prisma.socialAccountsOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  googleId: z.lazy(() => SortOrderSchema).optional(),
  googleAccessToken: z.lazy(() => SortOrderSchema).optional(),
  googleRefreshToken: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => socialAccountsCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => socialAccountsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => socialAccountsMinOrderByAggregateInputSchema).optional(),
});

export default socialAccountsOrderByWithAggregationInputSchema;
