import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const otpsScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.otpsScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => otpsScalarWhereWithAggregatesInputSchema), z.lazy(() => otpsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => otpsScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => otpsScalarWhereWithAggregatesInputSchema), z.lazy(() => otpsScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  otp: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export default otpsScalarWhereWithAggregatesInputSchema;
