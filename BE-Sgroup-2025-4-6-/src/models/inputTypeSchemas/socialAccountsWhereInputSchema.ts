import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { UsersScalarRelationFilterSchema } from './UsersScalarRelationFilterSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const socialAccountsWhereInputSchema: z.ZodType<Prisma.socialAccountsWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => socialAccountsWhereInputSchema), z.lazy(() => socialAccountsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => socialAccountsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => socialAccountsWhereInputSchema), z.lazy(() => socialAccountsWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  googleId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  googleAccessToken: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  googleRefreshToken: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  user: z.union([ z.lazy(() => UsersScalarRelationFilterSchema), z.lazy(() => usersWhereInputSchema) ]).optional(),
});

export default socialAccountsWhereInputSchema;
