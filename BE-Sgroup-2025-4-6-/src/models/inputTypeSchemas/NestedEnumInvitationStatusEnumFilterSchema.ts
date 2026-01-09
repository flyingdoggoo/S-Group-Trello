import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvitationStatusEnumSchema } from './InvitationStatusEnumSchema';

export const NestedEnumInvitationStatusEnumFilterSchema: z.ZodType<Prisma.NestedEnumInvitationStatusEnumFilter> = z.strictObject({
  equals: z.lazy(() => InvitationStatusEnumSchema).optional(),
  in: z.lazy(() => InvitationStatusEnumSchema).array().optional(),
  notIn: z.lazy(() => InvitationStatusEnumSchema).array().optional(),
  not: z.union([ z.lazy(() => InvitationStatusEnumSchema), z.lazy(() => NestedEnumInvitationStatusEnumFilterSchema) ]).optional(),
});

export default NestedEnumInvitationStatusEnumFilterSchema;
