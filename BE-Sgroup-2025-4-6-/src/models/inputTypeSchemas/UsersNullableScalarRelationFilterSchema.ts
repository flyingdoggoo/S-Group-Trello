import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const UsersNullableScalarRelationFilterSchema: z.ZodType<Prisma.UsersNullableScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => usersWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => usersWhereInputSchema).optional().nullable(),
});

export default UsersNullableScalarRelationFilterSchema;
