import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardStatusEnumSchema } from './CardStatusEnumSchema';

export const NestedEnumCardStatusEnumFilterSchema: z.ZodType<Prisma.NestedEnumCardStatusEnumFilter> = z.strictObject({
  equals: z.lazy(() => CardStatusEnumSchema).optional(),
  in: z.lazy(() => CardStatusEnumSchema).array().optional(),
  notIn: z.lazy(() => CardStatusEnumSchema).array().optional(),
  not: z.union([ z.lazy(() => CardStatusEnumSchema), z.lazy(() => NestedEnumCardStatusEnumFilterSchema) ]).optional(),
});

export default NestedEnumCardStatusEnumFilterSchema;
