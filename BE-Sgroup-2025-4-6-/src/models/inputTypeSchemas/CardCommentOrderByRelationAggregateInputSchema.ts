import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CardCommentOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CardCommentOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default CardCommentOrderByRelationAggregateInputSchema;
