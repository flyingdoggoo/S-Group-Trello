import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardWhereInputSchema } from './BoardWhereInputSchema';

export const BoardListRelationFilterSchema: z.ZodType<Prisma.BoardListRelationFilter> = z.strictObject({
  every: z.lazy(() => BoardWhereInputSchema).optional(),
  some: z.lazy(() => BoardWhereInputSchema).optional(),
  none: z.lazy(() => BoardWhereInputSchema).optional(),
});

export default BoardListRelationFilterSchema;
