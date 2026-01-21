import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { SortOrderSchema } from './SortOrderSchema';
import { CardOrderByWithRelationInputSchema } from './CardOrderByWithRelationInputSchema';
import { usersOrderByWithRelationInputSchema } from './usersOrderByWithRelationInputSchema';

export const CardMemberOrderByWithRelationInputSchema: z.ZodType<Prisma.CardMemberOrderByWithRelationInput> = z.strictObject({
  id: z.lazy(() => SortOrderSchema).optional(),
  cardId: z.lazy(() => SortOrderSchema).optional(),
  userId: z.lazy(() => SortOrderSchema).optional(),
  joinedAt: z.lazy(() => SortOrderSchema).optional(),
  card: z.lazy(() => CardOrderByWithRelationInputSchema).optional(),
  user: z.lazy(() => usersOrderByWithRelationInputSchema).optional(),
});

export default CardMemberOrderByWithRelationInputSchema;
