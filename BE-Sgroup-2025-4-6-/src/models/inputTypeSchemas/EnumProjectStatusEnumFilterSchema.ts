import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ProjectStatusEnumSchema } from './ProjectStatusEnumSchema';
import { NestedEnumProjectStatusEnumFilterSchema } from './NestedEnumProjectStatusEnumFilterSchema';

export const EnumProjectStatusEnumFilterSchema: z.ZodType<Prisma.EnumProjectStatusEnumFilter> = z.strictObject({
  equals: z.lazy(() => ProjectStatusEnumSchema).optional(),
  in: z.lazy(() => ProjectStatusEnumSchema).array().optional(),
  notIn: z.lazy(() => ProjectStatusEnumSchema).array().optional(),
  not: z.union([ z.lazy(() => ProjectStatusEnumSchema), z.lazy(() => NestedEnumProjectStatusEnumFilterSchema) ]).optional(),
});

export default EnumProjectStatusEnumFilterSchema;
