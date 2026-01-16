import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardTagWhereInputSchema } from '../inputTypeSchemas/CardTagWhereInputSchema'

export const CardTagDeleteManyArgsSchema: z.ZodType<Prisma.CardTagDeleteManyArgs> = z.object({
  where: CardTagWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default CardTagDeleteManyArgsSchema;
