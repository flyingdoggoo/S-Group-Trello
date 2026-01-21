import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { CardOrderByWithRelationInputSchema } from './CardOrderByWithRelationInputSchema';

export const CardTagOrderByWithRelationInputSchema: z.ZodType<Prisma.CardTagOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  cardId: z.lazy(() => SortOrderSchema).optional(),
  name: z.lazy(() => SortOrderSchema).optional(),
  color: z.lazy(() => SortOrderSchema).optional(),
  createdAt: z.lazy(() => SortOrderSchema).optional(),
  card: z.lazy(() => CardOrderByWithRelationInputSchema).optional(),
});

export default CardTagOrderByWithRelationInputSchema;
