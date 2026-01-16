import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardCommentWhereInputSchema } from '../inputTypeSchemas/CardCommentWhereInputSchema'

export const CardCommentDeleteManyArgsSchema: z.ZodType<Prisma.CardCommentDeleteManyArgs> = z.object({
  where: CardCommentWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default CardCommentDeleteManyArgsSchema;
