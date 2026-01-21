import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const CardTagScalarWhereInputSchema: z.ZodType<Prisma.CardTagScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => CardTagScalarWhereInputSchema), z.lazy(() => CardTagScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CardTagScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CardTagScalarWhereInputSchema), z.lazy(() => CardTagScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  cardId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  name: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  color: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  createdAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
});

export default CardTagScalarWhereInputSchema;
