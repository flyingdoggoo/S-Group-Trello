import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { socialAccountsWhereInputSchema } from './socialAccountsWhereInputSchema';

export const SocialAccountsNullableScalarRelationFilterSchema: z.ZodType<Prisma.SocialAccountsNullableScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => socialAccountsWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => socialAccountsWhereInputSchema).optional().nullable(),
});

export default SocialAccountsNullableScalarRelationFilterSchema;
