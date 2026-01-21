import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const CardTagScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CardTagScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => CardTagScalarWhereWithAggregatesInputSchema), z.lazy(() => CardTagScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CardTagScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CardTagScalarWhereWithAggregatesInputSchema), z.lazy(() => CardTagScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  cardId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  color: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export default CardTagScalarWhereWithAggregatesInputSchema;
