import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardTagWhereInputSchema } from './CardTagWhereInputSchema';

export const CardTagListRelationFilterSchema: z.ZodType<Prisma.CardTagListRelationFilter> = z.strictObject({
  every: z.lazy(() => CardTagWhereInputSchema).optional(),
  some: z.lazy(() => CardTagWhereInputSchema).optional(),
  none: z.lazy(() => CardTagWhereInputSchema).optional(),
});

export default CardTagListRelationFilterSchema;
