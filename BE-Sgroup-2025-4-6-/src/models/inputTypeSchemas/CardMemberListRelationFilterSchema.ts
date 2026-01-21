import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardMemberWhereInputSchema } from './CardMemberWhereInputSchema';

export const CardMemberListRelationFilterSchema: z.ZodType<Prisma.CardMemberListRelationFilter> = z.strictObject({
  every: z.lazy(() => CardMemberWhereInputSchema).optional(),
  some: z.lazy(() => CardMemberWhereInputSchema).optional(),
  none: z.lazy(() => CardMemberWhereInputSchema).optional(),
});

export default CardMemberListRelationFilterSchema;
