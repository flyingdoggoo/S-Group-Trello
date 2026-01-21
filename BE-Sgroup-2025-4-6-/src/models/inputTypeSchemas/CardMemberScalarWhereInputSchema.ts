import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';

export const CardMemberScalarWhereInputSchema: z.ZodType<Prisma.CardMemberScalarWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => CardMemberScalarWhereInputSchema), z.lazy(() => CardMemberScalarWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CardMemberScalarWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CardMemberScalarWhereInputSchema), z.lazy(() => CardMemberScalarWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  cardId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  joinedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
});

export default CardMemberScalarWhereInputSchema;
