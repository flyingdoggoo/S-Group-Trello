import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardMemberIncludeSchema } from '../inputTypeSchemas/CardMemberIncludeSchema'
import { CardMemberWhereUniqueInputSchema } from '../inputTypeSchemas/CardMemberWhereUniqueInputSchema'
import { CardMemberCreateInputSchema } from '../inputTypeSchemas/CardMemberCreateInputSchema'
import { CardMemberUncheckedCreateInputSchema } from '../inputTypeSchemas/CardMemberUncheckedCreateInputSchema'
import { CardMemberUpdateInputSchema } from '../inputTypeSchemas/CardMemberUpdateInputSchema'
import { CardMemberUncheckedUpdateInputSchema } from '../inputTypeSchemas/CardMemberUncheckedUpdateInputSchema'
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

export const CardMemberUpsertArgsSchema: z.ZodType<Prisma.CardMemberUpsertArgs> = z.object({
  select: CardMemberSelectSchema.optional(),
  include: z.lazy(() => CardMemberIncludeSchema).optional(),
  where: CardMemberWhereUniqueInputSchema, 
  create: z.union([ CardMemberCreateInputSchema, CardMemberUncheckedCreateInputSchema ]),
  update: z.union([ CardMemberUpdateInputSchema, CardMemberUncheckedUpdateInputSchema ]),
}).strict();

export default CardMemberUpsertArgsSchema;
