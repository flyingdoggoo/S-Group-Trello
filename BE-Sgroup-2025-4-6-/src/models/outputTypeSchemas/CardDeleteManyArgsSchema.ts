import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardWhereInputSchema } from '../inputTypeSchemas/CardWhereInputSchema'

export const CardDeleteManyArgsSchema: z.ZodType<Prisma.CardDeleteManyArgs> = z.object({
  where: CardWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default CardDeleteManyArgsSchema;
