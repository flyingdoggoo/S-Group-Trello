import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardStatusEnumSchema } from './CardStatusEnumSchema';
import { NestedEnumCardStatusEnumFilterSchema } from './NestedEnumCardStatusEnumFilterSchema';

export const EnumCardStatusEnumFilterSchema: z.ZodType<Prisma.EnumCardStatusEnumFilter> = z.strictObject({
  equals: z.lazy(() => CardStatusEnumSchema).optional(),
  in: z.lazy(() => CardStatusEnumSchema).array().optional(),
  notIn: z.lazy(() => CardStatusEnumSchema).array().optional(),
  not: z.union([ z.lazy(() => CardStatusEnumSchema), z.lazy(() => NestedEnumCardStatusEnumFilterSchema) ]).optional(),
});

export default EnumCardStatusEnumFilterSchema;
