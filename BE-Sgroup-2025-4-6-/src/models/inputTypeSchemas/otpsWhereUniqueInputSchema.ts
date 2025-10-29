import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { otpsWhereInputSchema } from './otpsWhereInputSchema';
import { StringFilterSchema } from './StringFilterSchema';
import { DateTimeFilterSchema } from './DateTimeFilterSchema';
import { UsersScalarRelationFilterSchema } from './UsersScalarRelationFilterSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const otpsWhereUniqueInputSchema: z.ZodType<Prisma.otpsWhereUniqueInput> = z.union([
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
  AND: z.union([ z.lazy(() => otpsWhereInputSchema), z.lazy(() => otpsWhereInputSchema).array() ]).optional(),
  OR: z.lazy(() => otpsWhereInputSchema).array().optional(),
  NOT: z.union([ z.lazy(() => otpsWhereInputSchema), z.lazy(() => otpsWhereInputSchema).array() ]).optional(),
  otp: z.union([ z.lazy(() => StringFilterSchema), z.string() ]).optional(),
  expiresAt: z.union([ z.lazy(() => DateTimeFilterSchema), z.coerce.date() ]).optional(),
  user: z.union([ z.lazy(() => UsersScalarRelationFilterSchema), z.lazy(() => usersWhereInputSchema) ]).optional(),
}));

export default otpsWhereUniqueInputSchema;
