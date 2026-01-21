import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const InvitationsOrderByRelationAggregateInputSchema: z.ZodType<Prisma.InvitationsOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default InvitationsOrderByRelationAggregateInputSchema;
