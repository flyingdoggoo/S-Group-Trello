import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardStatusEnumSchema } from './BoardStatusEnumSchema';

export const NestedEnumBoardStatusEnumFilterSchema: z.ZodType<Prisma.NestedEnumBoardStatusEnumFilter> = z.strictObject({
  equals: z.lazy(() => BoardStatusEnumSchema).optional(),
  in: z.lazy(() => BoardStatusEnumSchema).array().optional(),
  notIn: z.lazy(() => BoardStatusEnumSchema).array().optional(),
  not: z.union([ z.lazy(() => BoardStatusEnumSchema), z.lazy(() => NestedEnumBoardStatusEnumFilterSchema) ]).optional(),
});

export default NestedEnumBoardStatusEnumFilterSchema;
