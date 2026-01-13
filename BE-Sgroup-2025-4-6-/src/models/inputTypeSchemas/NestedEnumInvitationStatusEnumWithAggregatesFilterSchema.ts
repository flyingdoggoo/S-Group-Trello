import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvitationStatusEnumSchema } from './InvitationStatusEnumSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumInvitationStatusEnumFilterSchema } from './NestedEnumInvitationStatusEnumFilterSchema';

export const NestedEnumInvitationStatusEnumWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumInvitationStatusEnumWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => InvitationStatusEnumSchema).optional(),
  in: z.lazy(() => InvitationStatusEnumSchema).array().optional(),
  notIn: z.lazy(() => InvitationStatusEnumSchema).array().optional(),
  not: z.union([ z.lazy(() => InvitationStatusEnumSchema), z.lazy(() => NestedEnumInvitationStatusEnumWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumInvitationStatusEnumFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumInvitationStatusEnumFilterSchema).optional(),
});

export default NestedEnumInvitationStatusEnumWithAggregatesFilterSchema;
