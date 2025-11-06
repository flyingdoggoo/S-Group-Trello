import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { BoardOrderByWithRelationInputSchema } from './BoardOrderByWithRelationInputSchema';
import { CardOrderByRelationAggregateInputSchema } from './CardOrderByRelationAggregateInputSchema';

export const ListOrderByWithRelationInputSchema: z.ZodType<Prisma.ListOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  boardId: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  board: z.lazy(() => BoardOrderByWithRelationInputSchema).optional(),
  Card: z.lazy(() => CardOrderByRelationAggregateInputSchema).optional(),
});

export default ListOrderByWithRelationInputSchema;
