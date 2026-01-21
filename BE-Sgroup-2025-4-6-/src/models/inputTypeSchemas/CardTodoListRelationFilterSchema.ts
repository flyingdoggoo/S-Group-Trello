import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardTodoWhereInputSchema } from './CardTodoWhereInputSchema';

export const CardTodoListRelationFilterSchema: z.ZodType<Prisma.CardTodoListRelationFilter> = z.strictObject({
  every: z.lazy(() => CardTodoWhereInputSchema).optional(),
  some: z.lazy(() => CardTodoWhereInputSchema).optional(),
  none: z.lazy(() => CardTodoWhereInputSchema).optional(),
});

export default CardTodoListRelationFilterSchema;
