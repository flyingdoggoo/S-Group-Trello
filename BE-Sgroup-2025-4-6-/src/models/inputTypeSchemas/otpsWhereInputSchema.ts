import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UsersScalarRelationFilterSchema } from './UsersScalarRelationFilterSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const otpsWhereInputSchema: z.ZodType<Prisma.otpsWhereInput> = z.strictObject({
  AND: z.union([ z.lazy(() => otpsWhereInputSchema), z.lazy(() => otpsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => otpsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => otpsWhereInputSchema), z.lazy(() => otpsWhereInputSchema).array() ]).optional(),
  id: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  userId: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  otp: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UsersScalarRelationFilterSchema), z.lazy(() => usersWhereInputSchema) ]).optional(),
});

export default otpsWhereInputSchema;
