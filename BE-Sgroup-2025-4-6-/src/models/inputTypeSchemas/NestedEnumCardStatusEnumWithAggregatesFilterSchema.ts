import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardStatusEnumSchema } from './CardStatusEnumSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumCardStatusEnumFilterSchema } from './NestedEnumCardStatusEnumFilterSchema';

export const NestedEnumCardStatusEnumWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumCardStatusEnumWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => CardStatusEnumSchema).optional(),
  in: z.lazy(() => CardStatusEnumSchema).array().optional(),
  notIn: z.lazy(() => CardStatusEnumSchema).array().optional(),
  not: z.union([ z.lazy(() => CardStatusEnumSchema), z.lazy(() => NestedEnumCardStatusEnumWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumCardStatusEnumFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumCardStatusEnumFilterSchema).optional(),
});

export default NestedEnumCardStatusEnumWithAggregatesFilterSchema;
