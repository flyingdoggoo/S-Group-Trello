import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BoardOrderByRelationAggregateInputSchema: z.ZodType<Prisma.BoardOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default BoardOrderByRelationAggregateInputSchema;
