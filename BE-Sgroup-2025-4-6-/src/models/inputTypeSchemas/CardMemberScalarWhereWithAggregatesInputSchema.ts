import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringWithAggregatesFilterSchema } from './StringWithAggregatesFilterSchema';
import { DateTimeWithAggregatesFilterSchema } from './DateTimeWithAggregatesFilterSchema';

export const CardMemberScalarWhereWithAggregatesInputSchema: z.ZodType<Prisma.CardMemberScalarWhereWithAggregatesInput> = z.strictObject({
  AND: z.union([ z.lazy(() => CardMemberScalarWhereWithAggregatesInputSchema), z.lazy(() => CardMemberScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  OR: z.lazy(() => CardMemberScalarWhereWithAggregatesInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CardMemberScalarWhereWithAggregatesInputSchema), z.lazy(() => CardMemberScalarWhereWithAggregatesInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  cardId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringWithAggregatesFilterSchema), z.string() ]).optional(),
  joinedAt: z.union([ z.lazy(() => DateTimeWithAggregatesFilterSchema), z.coerce.date() ]).optional(),
});

export default CardMemberScalarWhereWithAggregatesInputSchema;
