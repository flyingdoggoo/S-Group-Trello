import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardWhereInputSchema } from './BoardWhereInputSchema';

export const BoardScalarRelationFilterSchema: z.ZodType<Prisma.BoardScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => BoardWhereInputSchema).optional(),
  isNot: z.lazy(() => BoardWhereInputSchema).optional(),
});

export default BoardScalarRelationFilterSchema;
