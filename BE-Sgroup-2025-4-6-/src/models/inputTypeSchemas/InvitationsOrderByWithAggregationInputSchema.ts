import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { InvitationsCountOrderByAggregateInputSchema } from './InvitationsCountOrderByAggregateInputSchema';
import { InvitationsMaxOrderByAggregateInputSchema } from './InvitationsMaxOrderByAggregateInputSchema';
import { InvitationsMinOrderByAggregateInputSchema } from './InvitationsMinOrderByAggregateInputSchema';

export const InvitationsOrderByWithAggregationInputSchema: z.ZodType<Prisma.InvitationsOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  projectId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  boardId: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  email: z.lazy(() => SortOrderSchema).optional(),
  roleId: z.lazy(() => SortOrderSchema).optional(),
  token: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  createdBy: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  expiresAt: z.lazy(() => SortOrderSchema).optional(),
  acceptedAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  _count: z.lazy(() => InvitationsCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => InvitationsMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => InvitationsMinOrderByAggregateInputSchema).optional(),
});

export default InvitationsOrderByWithAggregationInputSchema;
