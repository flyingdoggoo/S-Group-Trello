import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CardAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CardAvgOrderByAggregateInput> = z.strictObject({
  position: z.lazy(() => SortOrderSchema).optional(),
});

export default CardAvgOrderByAggregateInputSchema;
