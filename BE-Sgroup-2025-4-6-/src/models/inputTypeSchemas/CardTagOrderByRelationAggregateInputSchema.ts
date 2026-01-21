import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CardTagOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CardTagOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default CardTagOrderByRelationAggregateInputSchema;
