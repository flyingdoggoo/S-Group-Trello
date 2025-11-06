import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CardSumOrderByAggregateInputSchema: z.ZodType<Prisma.CardSumOrderByAggregateInput> = z.strictObject({
  position: z.lazy(() => SortOrderSchema).optional(),
});

export default CardSumOrderByAggregateInputSchema;
