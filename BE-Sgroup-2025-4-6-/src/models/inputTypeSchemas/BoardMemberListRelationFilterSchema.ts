import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardMemberWhereInputSchema } from './BoardMemberWhereInputSchema';

export const BoardMemberListRelationFilterSchema: z.ZodType<Prisma.BoardMemberListRelationFilter> = z.strictObject({
  every: z.lazy(() => BoardMemberWhereInputSchema).optional(),
  some: z.lazy(() => BoardMemberWhereInputSchema).optional(),
  none: z.lazy(() => BoardMemberWhereInputSchema).optional(),
});

export default BoardMemberListRelationFilterSchema;
