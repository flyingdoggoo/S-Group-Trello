import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardStatusEnumSchema } from './BoardStatusEnumSchema';
import { NestedIntFilterSchema } from './NestedIntFilterSchema';
import { NestedEnumBoardStatusEnumFilterSchema } from './NestedEnumBoardStatusEnumFilterSchema';

export const NestedEnumBoardStatusEnumWithAggregatesFilterSchema: z.ZodType<Prisma.NestedEnumBoardStatusEnumWithAggregatesFilter> = z.strictObject({
  equals: z.lazy(() => BoardStatusEnumSchema).optional(),
  in: z.lazy(() => BoardStatusEnumSchema).array().optional(),
  notIn: z.lazy(() => BoardStatusEnumSchema).array().optional(),
  not: z.union([ z.lazy(() => BoardStatusEnumSchema), z.lazy(() => NestedEnumBoardStatusEnumWithAggregatesFilterSchema) ]).optional(),
  _count: z.lazy(() => NestedIntFilterSchema).optional(),
  _min: z.lazy(() => NestedEnumBoardStatusEnumFilterSchema).optional(),
  _max: z.lazy(() => NestedEnumBoardStatusEnumFilterSchema).optional(),
});

export default NestedEnumBoardStatusEnumWithAggregatesFilterSchema;
