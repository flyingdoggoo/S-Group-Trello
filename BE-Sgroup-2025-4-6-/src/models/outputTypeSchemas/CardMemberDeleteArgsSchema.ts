import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardMemberIncludeSchema } from '../inputTypeSchemas/CardMemberIncludeSchema'
import { CardMemberWhereUniqueInputSchema } from '../inputTypeSchemas/CardMemberWhereUniqueInputSchema'
import { CardArgsSchema } from "../outputTypeSchemas/CardArgsSchema"
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CardMemberSelectSchema: z.ZodType<Prisma.CardMemberSelect> = z.object({
  id: z.boolean().optional(),
  cardId: z.boolean().optional(),
  userId: z.boolean().optional(),
  joinedAt: z.boolean().optional(),
  card: z.union([z.boolean(),z.lazy(() => CardArgsSchema)]).optional(),
  user: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
}).strict()

export const CardMemberDeleteArgsSchema: z.ZodType<Prisma.CardMemberDeleteArgs> = z.object({
  select: CardMemberSelectSchema.optional(),
  include: z.lazy(() => CardMemberIncludeSchema).optional(),
  where: CardMemberWhereUniqueInputSchema, 
}).strict();

export default CardMemberDeleteArgsSchema;
