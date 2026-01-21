import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';

export const CardTodoOrderByRelationAggregateInputSchema: z.ZodType<Prisma.CardTodoOrderByRelationAggregateInput> = z.strictObject({
  _count: z.lazy(() => SortOrderSchema).optional(),
});

export default CardTodoOrderByRelationAggregateInputSchema;
