import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const BoardMemberOrderByRelationAggregateInputSchema: z.ZodType<Prisma.BoardMemberOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default BoardMemberOrderByRelationAggregateInputSchema;
