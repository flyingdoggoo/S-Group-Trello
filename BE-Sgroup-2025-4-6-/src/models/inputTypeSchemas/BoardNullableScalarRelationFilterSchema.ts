import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardWhereInputSchema } from './BoardWhereInputSchema';

export const BoardNullableScalarRelationFilterSchema: z.ZodType<Prisma.BoardNullableScalarRelationFilter> = z.strictObject({
  is: z.lazy(() => BoardWhereInputSchema).optional().nullable(),
  isNot: z.lazy(() => BoardWhereInputSchema).optional().nullable(),
});

export default BoardNullableScalarRelationFilterSchema;
