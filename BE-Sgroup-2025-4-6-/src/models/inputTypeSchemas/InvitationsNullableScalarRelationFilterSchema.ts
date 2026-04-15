import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvitationsWhereInputSchema } from './InvitationsWhereInputSchema';

export const InvitationsNullableScalarRelationFilterSchema: z.ZodType<Prisma.InvitationsNullableScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => InvitationsWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => InvitationsWhereInputSchema).optional().nullable(),
});

export default InvitationsNullableScalarRelationFilterSchema;
