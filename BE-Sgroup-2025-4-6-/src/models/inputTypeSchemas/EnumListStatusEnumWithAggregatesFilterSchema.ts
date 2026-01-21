import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ListStatusEnumSchema } from './ListStatusEnumSchema';
import { NestedEnumListStatusEnumWithAggregatesFilterSchema } from './NestedEnumListStatusEnumWithAggregatesFilterSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumListStatusEnumFilterSchema } from './NestedEnumListStatusEnumFilterSchema';

export const EnumListStatusEnumWithAggregatesFilterSchema: z.ZodType<Prisma.EnumListStatusEnumWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => ListStatusEnumSchema).optional(),
  in: z.lazy(() => ListStatusEnumSchema).array().optional(),
  notIn: z.lazy(() => ListStatusEnumSchema).array().optional(),
  not: z.union([ z.lazy(() => ListStatusEnumSchema), z.lazy(() => NestedEnumListStatusEnumWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumListStatusEnumFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumListStatusEnumFilterSchema).optional(),
});

export default EnumListStatusEnumWithAggregatesFilterSchema;
