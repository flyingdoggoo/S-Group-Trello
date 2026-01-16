import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardTodoSelectSchema } from '../inputTypeSchemas/CardTodoSelectSchema';
import { CardTodoIncludeSchema } from '../inputTypeSchemas/CardTodoIncludeSchema';

export const CardTodoArgsSchema: z.ZodType<Prisma.CardTodoDefaultArgs> = z.object({
  select: z.lazy(() => CardTodoSelectSchema).optional(),
  include: z.lazy(() => CardTodoIncludeSchema).optional(),
}).strict();

export default CardTodoArgsSchema;
