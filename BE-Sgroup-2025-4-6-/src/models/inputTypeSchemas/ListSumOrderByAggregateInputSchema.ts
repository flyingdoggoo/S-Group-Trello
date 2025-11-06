import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ListSumOrderByAggregateInputSchema: z.ZodType<Prisma.ListSumOrderByAggregateInput> = z.strictObject({
  position: z.lazy(() => SortOrderSchema).optional(),
});

export default ListSumOrderByAggregateInputSchema;
