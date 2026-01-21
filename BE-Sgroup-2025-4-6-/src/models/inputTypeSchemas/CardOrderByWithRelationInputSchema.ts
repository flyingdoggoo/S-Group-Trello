import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { SortOrderInputSchema } from './SortOrderInputSchema';
import { ListOrderByWithRelationInputSchema } from './ListOrderByWithRelationInputSchema';
import { CardTagOrderByRelationAggregateInputSchema } from './CardTagOrderByRelationAggregateInputSchema';
import { CardTodoOrderByRelationAggregateInputSchema } from './CardTodoOrderByRelationAggregateInputSchema';
import { CardMemberOrderByRelationAggregateInputSchema } from './CardMemberOrderByRelationAggregateInputSchema';
import { CardCommentOrderByRelationAggregateInputSchema } from './CardCommentOrderByRelationAggregateInputSchema';

export const CardOrderByWithRelationInputSchema: z.ZodType<Prisma.CardOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  listId: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  description: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  status: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  deletedAt: z.union([ z.lazy(() => SortOrderSchema), z.lazy(() => SortOrderInputSchema) ]).optional(),
  list: z.lazy(() => ListOrderByWithRelationInputSchema).optional(),
  tags: z.lazy(() => CardTagOrderByRelationAggregateInputSchema).optional(),
  todos: z.lazy(() => CardTodoOrderByRelationAggregateInputSchema).optional(),
  members: z.lazy(() => CardMemberOrderByRelationAggregateInputSchema).optional(),
  comments: z.lazy(() => CardCommentOrderByRelationAggregateInputSchema).optional(),
});

export default CardOrderByWithRelationInputSchema;
