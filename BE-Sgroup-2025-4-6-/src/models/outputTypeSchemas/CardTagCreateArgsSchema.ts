import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardTagIncludeSchema } from '../inputTypeSchemas/CardTagIncludeSchema'
import { CardTagCreateInputSchema } from '../inputTypeSchemas/CardTagCreateInputSchema'
import { CardTagUncheckedCreateInputSchema } from '../inputTypeSchemas/CardTagUncheckedCreateInputSchema'
import { CardArgsSchema } from "../outputTypeSchemas/CardArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CardTagSelectSchema: z.ZodType<Prisma.CardTagSelect> = z.object({
  id: z.boolean().optional(),
  cardId: z.boolean().optional(),
  name: z.boolean().optional(),
  color: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  card: z.union([z.boolean(),z.lazy(() => CardArgsSchema)]).optional(),
}).strict()

export const CardTagCreateArgsSchema: z.ZodType<Prisma.CardTagCreateArgs> = z.object({
  select: CardTagSelectSchema.optional(),
  include: z.lazy(() => CardTagIncludeSchema).optional(),
  data: z.union([ CardTagCreateInputSchema, CardTagUncheckedCreateInputSchema ]),
}).strict();

export default CardTagCreateArgsSchema;
