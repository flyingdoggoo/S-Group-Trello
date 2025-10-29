import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { permissionWhereInputSchema } from './permissionWhereInputSchema';

export const PermissionScalarRelationFilterSchema: z.ZodType<Prisma.PermissionScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => permissionWhereInputSchema).optional(),
  isNot: z.lazy(() => permissionWhereInputSchema).optional(),
});

export default PermissionScalarRelationFilterSchema;
