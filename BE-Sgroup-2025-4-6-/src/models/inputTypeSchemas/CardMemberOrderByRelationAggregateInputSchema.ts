import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CardMemberOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CardMemberOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default CardMemberOrderByRelationAggregateInputSchema;
