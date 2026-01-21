import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardMemberWhereInputSchema } from './CardMemberWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { CardScalarRelationFilterSchema } from './CardScalarRelationFilterSchema';
import { CardWhereInputSchema } from './CardWhereInputSchema';
import { UsersScalarRelationFilterSchema } from './UsersScalarRelationFilterSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const CardMemberWhereUniqueInputSchema: z.ZodType<Prisma.CardMemberWhereUniqueInput> = z.object({
  id: z.uuid(),
})
.and(z.strictObject({
  id: z.uuid().optional(),
  AND: z.union([ z.lazy(() => CardMemberWhereInputSchema), z.lazy(() => CardMemberWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => CardMemberWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => CardMemberWhereInputSchema), z.lazy(() => CardMemberWhereInputSchema).array() ]).optional(),
  cardId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  joinedAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  card: z.union([ z.lazy(() => CardScalarRelationFilterSchema), z.lazy(() => CardWhereInputSchema) ]).optional(),
  user: z.union([ z.lazy(() => UsersScalarRelationFilterSchema), z.lazy(() => usersWhereInputSchema) ]).optional(),
}));

export default CardMemberWhereUniqueInputSchema;
