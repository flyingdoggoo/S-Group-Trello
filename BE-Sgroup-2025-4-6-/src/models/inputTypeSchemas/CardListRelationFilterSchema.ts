import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardWhereInputSchema } from './CardWhereInputSchema';

export const CardListRelationFilterSchema: z.ZodType<Prisma.CardListRelationFilter> = z.strictObject({
  every: z.lazy(() => CardWhereInputSchema).optional(),
  some: z.lazy(() => CardWhereInputSchema).optional(),
  none: z.lazy(() => CardWhereInputSchema).optional(),
});

export default CardListRelationFilterSchema;
