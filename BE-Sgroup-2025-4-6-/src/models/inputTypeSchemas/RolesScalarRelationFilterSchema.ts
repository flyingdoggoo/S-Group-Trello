import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { rolesWhereInputSchema } from './rolesWhereInputSchema';

export const RolesScalarRelationFilterSchema: z.ZodType<Prisma.RolesScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => rolesWhereInputSchema).optional(),
  isNot: z.lazy(() => rolesWhereInputSchema).optional(),
});

export default RolesScalarRelationFilterSchema;
