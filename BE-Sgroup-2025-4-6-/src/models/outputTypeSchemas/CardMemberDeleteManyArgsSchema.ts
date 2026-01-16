import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardMemberWhereInputSchema } from '../inputTypeSchemas/CardMemberWhereInputSchema'

export const CardMemberDeleteManyArgsSchema: z.ZodType<Prisma.CardMemberDeleteManyArgs> = z.object({
  where: CardMemberWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default CardMemberDeleteManyArgsSchema;
