import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const socialAccountsMinOrderByAggregateInputSchema: z.ZodType<Prisma.socialAccountsMinOrderByAggregateInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  googleId: z.lazy(() => SortOrderSchema).optional(),
  googleAccessToken: z.lazy(() => SortOrderSchema).optional(),
  googleRefreshToken: z.lazy(() => SortOrderSchema).optional(),
});

export default socialAccountsMinOrderByAggregateInputSchema;
