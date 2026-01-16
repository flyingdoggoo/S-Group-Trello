import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardCommentCreateManyInputSchema } from '../inputTypeSchemas/CardCommentCreateManyInputSchema'

export const CardCommentCreateManyAndReturnArgsSchema: z.ZodType<Prisma.CardCommentCreateManyAndReturnArgs> = z.object({
  data: z.union([ CardCommentCreateManyInputSchema, CardCommentCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default CardCommentCreateManyAndReturnArgsSchema;
