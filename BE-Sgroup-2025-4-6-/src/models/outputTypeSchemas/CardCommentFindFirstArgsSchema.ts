import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardCommentIncludeSchema } from '../inputTypeSchemas/CardCommentIncludeSchema'
import { CardCommentWhereInputSchema } from '../inputTypeSchemas/CardCommentWhereInputSchema'
import { CardCommentOrderByWithRelationInputSchema } from '../inputTypeSchemas/CardCommentOrderByWithRelationInputSchema'
import { CardCommentWhereUniqueInputSchema } from '../inputTypeSchemas/CardCommentWhereUniqueInputSchema'
import { CardCommentScalarFieldEnumSchema } from '../inputTypeSchemas/CardCommentScalarFieldEnumSchema'
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

export const CardCommentFindFirstArgsSchema: z.ZodType<Prisma.CardCommentFindFirstArgs> = z.object({
  select: CardCommentSelectSchema.optional(),
  include: z.lazy(() => CardCommentIncludeSchema).optional(),
  where: CardCommentWhereInputSchema.optional(), 
  orderBy: z.union([ CardCommentOrderByWithRelationInputSchema.array(), CardCommentOrderByWithRelationInputSchema ]).optional(),
  cursor: CardCommentWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CardCommentScalarFieldEnumSchema, CardCommentScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default CardCommentFindFirstArgsSchema;
