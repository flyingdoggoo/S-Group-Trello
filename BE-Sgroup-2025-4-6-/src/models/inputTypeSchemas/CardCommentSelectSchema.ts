import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardArgsSchema } from "../outputTypeSchemas/CardArgsSchema"
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"

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

export default CardCommentSelectSchema;
