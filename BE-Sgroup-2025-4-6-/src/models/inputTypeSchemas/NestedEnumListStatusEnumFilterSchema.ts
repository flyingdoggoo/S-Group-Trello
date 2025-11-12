import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ListStatusEnumSchema } from './ListStatusEnumSchema';

export const NestedEnumListStatusEnumFilterSchema: z.ZodType<Prisma.NestedEnumListStatusEnumFilter> = z.strictObject({
  equals: z.lazy(() => ListStatusEnumSchema).optional(),
  in: z.lazy(() => ListStatusEnumSchema).array().optional(),
  notIn: z.lazy(() => ListStatusEnumSchema).array().optional(),
  not: z.union([ z.lazy(() => ListStatusEnumSchema), z.lazy(() => NestedEnumListStatusEnumFilterSchema) ]).optional(),
});

export default NestedEnumListStatusEnumFilterSchema;
