import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardTagIncludeSchema } from '../inputTypeSchemas/CardTagIncludeSchema'
import { CardTagWhereInputSchema } from '../inputTypeSchemas/CardTagWhereInputSchema'
import { CardTagOrderByWithRelationInputSchema } from '../inputTypeSchemas/CardTagOrderByWithRelationInputSchema'
import { CardTagWhereUniqueInputSchema } from '../inputTypeSchemas/CardTagWhereUniqueInputSchema'
import { CardTagScalarFieldEnumSchema } from '../inputTypeSchemas/CardTagScalarFieldEnumSchema'
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

export const CardTagFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CardTagFindFirstOrThrowArgs> = z.object({
  select: CardTagSelectSchema.optional(),
  include: z.lazy(() => CardTagIncludeSchema).optional(),
  where: CardTagWhereInputSchema.optional(), 
  orderBy: z.union([ CardTagOrderByWithRelationInputSchema.array(), CardTagOrderByWithRelationInputSchema ]).optional(),
  cursor: CardTagWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CardTagScalarFieldEnumSchema, CardTagScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default CardTagFindFirstOrThrowArgsSchema;
