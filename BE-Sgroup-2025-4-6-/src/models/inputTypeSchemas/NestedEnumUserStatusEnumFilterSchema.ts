import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { UserStatusEnumSchema } from './UserStatusEnumSchema';

export const NestedEnumUserStatusEnumFilterSchema: z.ZodType<Prisma.NestedEnumUserStatusEnumFilter> = z.strictObject({
  equals: z.lazy(() => UserStatusEnumSchema).optional(),
  in: z.lazy(() => UserStatusEnumSchema).array().optional(),
  notIn: z.lazy(() => UserStatusEnumSchema).array().optional(),
  not: z.union([ z.lazy(() => UserStatusEnumSchema), z.lazy(() => NestedEnumUserStatusEnumFilterSchema) ]).optional(),
});

export default NestedEnumUserStatusEnumFilterSchema;
