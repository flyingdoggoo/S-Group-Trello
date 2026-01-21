import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserStatusEnumSchema } from './UserStatusEnumSchema';
import { NestedEnumUserStatusEnumWithAggregatesFilterSchema } from './NestedEnumUserStatusEnumWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumUserStatusEnumFilterSchema } from './NestedEnumUserStatusEnumFilterSchema';

export const EnumUserStatusEnumWithAggregatesFilterSchema: z.ZodType<Prisma.EnumUserStatusEnumWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => UserStatusEnumSchema).optional(),
  in: z.lazy(() => UserStatusEnumSchema).array().optional(),
  notIn: z.lazy(() => UserStatusEnumSchema).array().optional(),
  not: z.union([ z.lazy(() => UserStatusEnumSchema), z.lazy(() => NestedEnumUserStatusEnumWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumUserStatusEnumFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumUserStatusEnumFilterSchema).optional(),
});

export default EnumUserStatusEnumWithAggregatesFilterSchema;
