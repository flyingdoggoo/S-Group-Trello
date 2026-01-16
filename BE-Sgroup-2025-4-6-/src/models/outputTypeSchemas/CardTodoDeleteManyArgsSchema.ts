import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardTodoWhereInputSchema } from '../inputTypeSchemas/CardTodoWhereInputSchema'

export const CardTodoDeleteManyArgsSchema: z.ZodType<Prisma.CardTodoDeleteManyArgs> = z.object({
  where: CardTodoWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default CardTodoDeleteManyArgsSchema;
