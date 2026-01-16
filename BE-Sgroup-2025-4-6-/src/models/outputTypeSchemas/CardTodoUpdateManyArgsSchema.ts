import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardTodoUpdateManyMutationInputSchema } from '../inputTypeSchemas/CardTodoUpdateManyMutationInputSchema'
import { CardTodoUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/CardTodoUncheckedUpdateManyInputSchema'
import { CardTodoWhereInputSchema } from '../inputTypeSchemas/CardTodoWhereInputSchema'

export const CardTodoUpdateManyArgsSchema: z.ZodType<Prisma.CardTodoUpdateManyArgs> = z.object({
  data: z.union([ CardTodoUpdateManyMutationInputSchema, CardTodoUncheckedUpdateManyInputSchema ]),
  where: CardTodoWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default CardTodoUpdateManyArgsSchema;
