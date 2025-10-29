import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { socialAccountsWhereInputSchema } from './socialAccountsWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { UsersScalarRelationFilterSchema } from './UsersScalarRelationFilterSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const socialAccountsWhereUniqueInputSchema: z.ZodType<Prisma.socialAccountsWhereUniqueInput> = z.union([
  z.object({
    id: z.uuid(),
    userId: z.string(),
  }),
  z.object({
    id: z.uuid(),
  }),
  z.object({
    userId: z.string(),
  }),
])
.and(z.strictObject({
  id: z.uuid().optional(),
  userId: z.string().optional(),
  AND: z.union([ z.lazy(() => socialAccountsWhereInputSchema), z.lazy(() => socialAccountsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => socialAccountsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => socialAccountsWhereInputSchema), z.lazy(() => socialAccountsWhereInputSchema).array() ]).optional(),
  googleId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  googleAccessToken: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  googleRefreshToken: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  user: z.union([ z.lazy(() => UsersScalarRelationFilterSchema), z.lazy(() => usersWhereInputSchema) ]).optional(),
}));

export default socialAccountsWhereUniqueInputSchema;
