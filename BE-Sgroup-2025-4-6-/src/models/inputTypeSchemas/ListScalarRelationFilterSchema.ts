import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ListWhereInputSchema } from './ListWhereInputSchema';

export const ListScalarRelationFilterSchema: z.ZodType<Prisma.ListScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => ListWhereInputSchema).optional(),
  isNot: z.lazy(() => ListWhereInputSchema).optional(),
});

export default ListScalarRelationFilterSchema;
