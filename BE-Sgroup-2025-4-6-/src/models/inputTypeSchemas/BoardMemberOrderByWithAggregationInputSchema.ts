import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { BoardMemberCountOrderByAggregateInputSchema } from './BoardMemberCountOrderByAggregateInputSchema';
import { BoardMemberMaxOrderByAggregateInputSchema } from './BoardMemberMaxOrderByAggregateInputSchema';
import { BoardMemberMinOrderByAggregateInputSchema } from './BoardMemberMinOrderByAggregateInputSchema';

export const BoardMemberOrderByWithAggregationInputSchema: z.ZodType<Prisma.BoardMemberOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  boardId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  roleId: z.lazy(() => SortOrderSchema).optional(),
  joinedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => BoardMemberCountOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => BoardMemberMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => BoardMemberMinOrderByAggregateInputSchema).optional(),
});

export default BoardMemberOrderByWithAggregationInputSchema;
