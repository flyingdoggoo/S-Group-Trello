import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { accountsWhereInputSchema } from './accountsWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { UsersScalarRelationFilterSchema } from './UsersScalarRelationFilterSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const accountsWhereUniqueInputSchema: z.ZodType<Prisma.accountsWhereUniqueInput> = z.union([
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
  AND: z.union([ z.lazy(() => accountsWhereInputSchema), z.lazy(() => accountsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => accountsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => accountsWhereInputSchema), z.lazy(() => accountsWhereInputSchema).array() ]).optional(),
  password: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  salt: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  user: z.union([ z.lazy(() => UsersScalarRelationFilterSchema), z.lazy(() => usersWhereInputSchema) ]).optional(),
}));

export default accountsWhereUniqueInputSchema;
