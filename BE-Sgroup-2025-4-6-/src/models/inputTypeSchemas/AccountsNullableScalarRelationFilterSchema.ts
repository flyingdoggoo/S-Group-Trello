import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { accountsWhereInputSchema } from './accountsWhereInputSchema';

export const AccountsNullableScalarRelationFilterSchema: z.ZodType<Prisma.AccountsNullableScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => accountsWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => accountsWhereInputSchema).optional().nullable(),
});

export default AccountsNullableScalarRelationFilterSchema;
