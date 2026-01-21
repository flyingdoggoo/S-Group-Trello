import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CardTodoAvgOrderByAggregateInputSchema: z.ZodType<Prisma.CardTodoAvgOrderByAggregateInput> = z.strictObject({
  position: z.lazy(() => SortOrderSchema).optional(),
});

export default CardTodoAvgOrderByAggregateInputSchema;
