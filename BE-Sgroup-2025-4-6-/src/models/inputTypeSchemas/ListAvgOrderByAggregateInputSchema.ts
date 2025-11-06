import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ListAvgOrderByAggregateInputSchema: z.ZodType<Prisma.ListAvgOrderByAggregateInput> = z.strictObject({
  position: z.lazy(() => SortOrderSchema).optional(),
});

export default ListAvgOrderByAggregateInputSchema;
