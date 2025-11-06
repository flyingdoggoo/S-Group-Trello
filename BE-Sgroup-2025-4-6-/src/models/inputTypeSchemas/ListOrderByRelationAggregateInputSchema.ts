import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const ListOrderByRelationAggregateInputSchema: z.ZodType<Prisma.ListOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default ListOrderByRelationAggregateInputSchema;
