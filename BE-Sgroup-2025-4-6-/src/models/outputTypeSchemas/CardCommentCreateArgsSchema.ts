import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardCommentIncludeSchema } from '../inputTypeSchemas/CardCommentIncludeSchema'
import { CardCommentCreateInputSchema } from '../inputTypeSchemas/CardCommentCreateInputSchema'
import { CardCommentUncheckedCreateInputSchema } from '../inputTypeSchemas/CardCommentUncheckedCreateInputSchema'
import { CardArgsSchema } from "../outputTypeSchemas/CardArgsSchema"
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CardCommentSelectSchema: z.ZodType<Prisma.CardCommentSelect> = z.object({
  id: z.boolean().optional(),
  cardId: z.boolean().optional(),
  userId: z.boolean().optional(),
  content: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  card: z.union([z.boolean(),z.lazy(() => CardArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
}).strict()

export const CardCommentCreateArgsSchema: z.ZodType<Prisma.CardCommentCreateArgs> = z.object({
  select: CardCommentSelectSchema.optional(),
  include: z.lazy(() => CardCommentIncludeSchema).optional(),
  data: z.union([ CardCommentCreateInputSchema, CardCommentUncheckedCreateInputSchema ]),
}).strict();

export default CardCommentCreateArgsSchema;
