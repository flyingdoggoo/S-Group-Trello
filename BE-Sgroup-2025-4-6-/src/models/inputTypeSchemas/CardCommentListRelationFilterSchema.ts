import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardCommentWhereInputSchema } from './CardCommentWhereInputSchema';

export const CardCommentListRelationFilterSchema: z.ZodType<Prisma.CardCommentListRelationFilter> = z.strictObject({
  every: z.lazy(() => CardCommentWhereInputSchema).optional(),
  some: z.lazy(() => CardCommentWhereInputSchema).optional(),
  none: z.lazy(() => CardCommentWhereInputSchema).optional(),
});

export default CardCommentListRelationFilterSchema;
