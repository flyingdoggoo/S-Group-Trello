import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardTodoCreateManyInputSchema } from '../inputTypeSchemas/CardTodoCreateManyInputSchema'

export const CardTodoCreateManyArgsSchema: z.ZodType<Prisma.CardTodoCreateManyArgs> = z.object({
  data: z.union([ CardTodoCreateManyInputSchema, CardTodoCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default CardTodoCreateManyArgsSchema;
