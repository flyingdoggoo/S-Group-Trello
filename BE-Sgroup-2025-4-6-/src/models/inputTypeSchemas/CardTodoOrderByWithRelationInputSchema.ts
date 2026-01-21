import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { CardOrderByWithRelationInputSchema } from './CardOrderByWithRelationInputSchema';

export const CardTodoOrderByWithRelationInputSchema: z.ZodType<Prisma.CardTodoOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  cardId: z.lazy(() => SortOrderSchema).optional(),
  title: z.lazy(() => SortOrderSchema).optional(),
  completed: z.lazy(() => SortOrderSchema).optional(),
  position: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  updatedAt: z.lazy(() => SortOrderSchema).optional(),
  card: z.lazy(() => CardOrderByWithRelationInputSchema).optional(),
});

export default CardTodoOrderByWithRelationInputSchema;
