import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardCommentUpdateManyMutationInputSchema } from '../inputTypeSchemas/CardCommentUpdateManyMutationInputSchema'
import { CardCommentUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/CardCommentUncheckedUpdateManyInputSchema'
import { CardCommentWhereInputSchema } from '../inputTypeSchemas/CardCommentWhereInputSchema'

export const CardCommentUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.CardCommentUpdateManyAndReturnArgs> = z.object({
  data: z.union([ CardCommentUpdateManyMutationInputSchema, CardCommentUncheckedUpdateManyInputSchema ]),
  where: CardCommentWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default CardCommentUpdateManyAndReturnArgsSchema;
