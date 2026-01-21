import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardTagWhereInputSchema } from './CardTagWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { CardScalarRelationFilterSchema } from './CardScalarRelationFilterSchema';
import { CardWhereInputSchema } from './CardWhereInputSchema';

export const CardTagWhereUniqueInputSchema: z.ZodType<Prisma.CardTagWhereUniqueInput> = z.object({
  id: z.uuid(),
})
.and(z.strictObject({
  id: z.uuid().optional(),
  AND: z.union([ z.lazy(() => CardTagWhereInputSchema), z.lazy(() => CardTagWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CardTagWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CardTagWhereInputSchema), z.lazy(() => CardTagWhereInputSchema).array() ]).optional(),
  cardId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  color: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  card: z.union([ z.lazy(() => CardScalarRelationFilterSchema), z.lazy(() => CardWhereInputSchema) ]).optional(),
}));

export default CardTagWhereUniqueInputSchema;
