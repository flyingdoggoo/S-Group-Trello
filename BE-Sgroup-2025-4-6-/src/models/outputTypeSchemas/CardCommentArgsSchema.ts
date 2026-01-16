import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardCommentSelectSchema } from '../inputTypeSchemas/CardCommentSelectSchema';
import { CardCommentIncludeSchema } from '../inputTypeSchemas/CardCommentIncludeSchema';

export const CardCommentArgsSchema: z.ZodType<Prisma.CardCommentDefaultArgs> = z.object({
  select: z.lazy(() => CardCommentSelectSchema).optional(),
  include: z.lazy(() => CardCommentIncludeSchema).optional(),
}).strict();

export default CardCommentArgsSchema;
