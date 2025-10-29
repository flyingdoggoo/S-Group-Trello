import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';

export const socialAccountsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.socialAccountsScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => socialAccountsScalarWhereWithAggregatesInputSchema), z.lazy(() => socialAccountsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => socialAccountsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => socialAccountsScalarWhereWithAggregatesInputSchema), z.lazy(() => socialAccountsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  googleId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  googleAccessToken: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  googleRefreshToken: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
});

export default socialAccountsScalarWhereWithAggregatesInputSchema;
