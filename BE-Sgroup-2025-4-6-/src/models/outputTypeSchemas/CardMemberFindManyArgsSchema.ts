import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardMemberIncludeSchema } from '../inputTypeSchemas/CardMemberIncludeSchema'
import { CardMemberWhereInputSchema } from '../inputTypeSchemas/CardMemberWhereInputSchema'
import { CardMemberOrderByWithRelationInputSchema } from '../inputTypeSchemas/CardMemberOrderByWithRelationInputSchema'
import { CardMemberWhereUniqueInputSchema } from '../inputTypeSchemas/CardMemberWhereUniqueInputSchema'
import { CardMemberScalarFieldEnumSchema } from '../inputTypeSchemas/CardMemberScalarFieldEnumSchema'
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

export const CardMemberFindManyArgsSchema: z.ZodType<Prisma.CardMemberFindManyArgs> = z.object({
  select: CardMemberSelectSchema.optional(),
  include: z.lazy(() => CardMemberIncludeSchema).optional(),
  where: CardMemberWhereInputSchema.optional(), 
  orderBy: z.union([ CardMemberOrderByWithRelationInputSchema.array(), CardMemberOrderByWithRelationInputSchema ]).optional(),
  cursor: CardMemberWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CardMemberScalarFieldEnumSchema, CardMemberScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default CardMemberFindManyArgsSchema;
