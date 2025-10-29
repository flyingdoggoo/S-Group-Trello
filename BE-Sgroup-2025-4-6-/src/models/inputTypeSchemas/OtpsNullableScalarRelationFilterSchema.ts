import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { otpsWhereInputSchema } from './otpsWhereInputSchema';

export const OtpsNullableScalarRelationFilterSchema: z.ZodType<Prisma.OtpsNullableScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => otpsWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => otpsWhereInputSchema).optional().nullable(),
});

export default OtpsNullableScalarRelationFilterSchema;
