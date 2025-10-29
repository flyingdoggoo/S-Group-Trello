import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { tokensWhereInputSchema } from './tokensWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { UsersScalarRelationFilterSchema } from './UsersScalarRelationFilterSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const tokensWhereUniqueInputSchema: z.ZodType<Prisma.tokensWhereUniqueInput> = z.union([
  z.object({
    id: z.uuid(),
    refreshToken: z.string(),
  }),
  z.object({
    id: z.uuid(),
  }),
  z.object({
    refreshToken: z.string(),
  }),
])
.and(z.strictObject({
  id: z.uuid().optional(),
  refreshToken: z.string().optional(),
  AND: z.union([ z.lazy(() => tokensWhereInputSchema), z.lazy(() => tokensWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => tokensWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => tokensWhereInputSchema), z.lazy(() => tokensWhereInputSchema).array() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  user: z.union([ z.lazy(() => UsersScalarRelationFilterSchema), z.lazy(() => usersWhereInputSchema) ]).optional(),
}));

export default tokensWhereUniqueInputSchema;
