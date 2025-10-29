import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectStatusEnumSchema } from './ProjectStatusEnumSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumProjectStatusEnumFilterSchema } from './NestedEnumProjectStatusEnumFilterSchema';

export const NestedEnumProjectStatusEnumWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumProjectStatusEnumWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => ProjectStatusEnumSchema).optional(),
  in: z.lazy(() => ProjectStatusEnumSchema).array().optional(),
  notIn: z.lazy(() => ProjectStatusEnumSchema).array().optional(),
  not: z.union([ z.lazy(() => ProjectStatusEnumSchema), z.lazy(() => NestedEnumProjectStatusEnumWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumProjectStatusEnumFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumProjectStatusEnumFilterSchema).optional(),
});

export default NestedEnumProjectStatusEnumWithAggregatesFilterSchema;
