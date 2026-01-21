import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CardOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CardOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default CardOrderByRelationAggregateInputSchema;
