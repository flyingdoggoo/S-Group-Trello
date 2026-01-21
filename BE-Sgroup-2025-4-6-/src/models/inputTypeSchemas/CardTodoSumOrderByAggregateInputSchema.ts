import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CardTodoSumOrderByAggregateInputSchema: z.ZodType<Prisma.CardTodoSumOrderByAggregateInput> = z.strictObject({
  position: z.lazy(() => SortOrderSchema).optional(),
});

export default CardTodoSumOrderByAggregateInputSchema;
