import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ListWhereInputSchema } from './ListWhereInputSchema';

export const ListListRelationFilterSchema: z.ZodType<Prisma.ListListRelationFilter> = z.strictObject({
  every: z.lazy(() => ListWhereInputSchema).optional(),
  some: z.lazy(() => ListWhereInputSchema).optional(),
  none: z.lazy(() => ListWhereInputSchema).optional(),
});

export default ListListRelationFilterSchema;
