import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const UsersScalarRelationFilterSchema: z.ZodType<Prisma.UsersScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => usersWhereInputSchema).optional(),
  isNot: z.lazy(() => usersWhereInputSchema).optional(),
});

export default UsersScalarRelationFilterSchema;
