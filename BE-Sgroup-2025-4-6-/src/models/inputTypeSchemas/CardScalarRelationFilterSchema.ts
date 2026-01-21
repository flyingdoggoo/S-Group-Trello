import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardWhereInputSchema } from './CardWhereInputSchema';

export const CardScalarRelationFilterSchema: z.ZodType<Prisma.CardScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => CardWhereInputSchema).optional(),
  isNot: z.lazy(() => CardWhereInputSchema).optional(),
});

export default CardScalarRelationFilterSchema;
