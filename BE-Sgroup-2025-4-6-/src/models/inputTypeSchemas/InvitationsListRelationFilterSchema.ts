import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvitationsWhereInputSchema } from './InvitationsWhereInputSchema';

export const InvitationsListRelationFilterSchema: z.ZodType<Prisma.InvitationsListRelationFilter> = z.strictObject({
  every: z.lazy(() => InvitationsWhereInputSchema).optional(),
  some: z.lazy(() => InvitationsWhereInputSchema).optional(),
  none: z.lazy(() => InvitationsWhereInputSchema).optional(),
});

export default InvitationsListRelationFilterSchema;
