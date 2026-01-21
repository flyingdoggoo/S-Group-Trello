import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { CardTodoCountOrderByAggregateInputSchema } from './CardTodoCountOrderByAggregateInputSchema';
import { CardTodoAvgOrderByAggregateInputSchema } from './CardTodoAvgOrderByAggregateInputSchema';
import { CardTodoMaxOrderByAggregateInputSchema } from './CardTodoMaxOrderByAggregateInputSchema';
import { CardTodoMinOrderByAggregateInputSchema } from './CardTodoMinOrderByAggregateInputSchema';
import { CardTodoSumOrderByAggregateInputSchema } from './CardTodoSumOrderByAggregateInputSchema';

export const CardTodoOrderByWithAggregationInputSchema: z.ZodType<Prisma.CardTodoOrderByWithAggregationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  cardId: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  completed: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  _count: z.lazy(() => CardTodoCountOrderByAggregateInputSchema).optional(),
  _avg: z.lazy(() => CardTodoAvgOrderByAggregateInputSchema).optional(),
  _max: z.lazy(() => CardTodoMaxOrderByAggregateInputSchema).optional(),
  _min: z.lazy(() => CardTodoMinOrderByAggregateInputSchema).optional(),
  _sum: z.lazy(() => CardTodoSumOrderByAggregateInputSchema).optional(),
});

export default CardTodoOrderByWithAggregationInputSchema;
