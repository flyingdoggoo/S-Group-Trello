import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardTodoIncludeSchema } from '../inputTypeSchemas/CardTodoIncludeSchema'
import { CardTodoWhereInputSchema } from '../inputTypeSchemas/CardTodoWhereInputSchema'
import { CardTodoOrderByWithRelationInputSchema } from '../inputTypeSchemas/CardTodoOrderByWithRelationInputSchema'
import { CardTodoWhereUniqueInputSchema } from '../inputTypeSchemas/CardTodoWhereUniqueInputSchema'
import { CardTodoScalarFieldEnumSchema } from '../inputTypeSchemas/CardTodoScalarFieldEnumSchema'
import { CardArgsSchema } from "../outputTypeSchemas/CardArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const CardTodoSelectSchema: z.ZodType<Prisma.CardTodoSelect> = z.object({
  id: z.boolean().optional(),
  cardId: z.boolean().optional(),
  title: z.boolean().optional(),
  completed: z.boolean().optional(),
  position: z.boolean().optional(),
  createdAt: z.boolean().optional(),
  updatedAt: z.boolean().optional(),
  card: z.union([z.boolean(),z.lazy(() => CardArgsSchema)]).optional(),
}).strict()

export const CardTodoFindFirstOrThrowArgsSchema: z.ZodType<Prisma.CardTodoFindFirstOrThrowArgs> = z.object({
  select: CardTodoSelectSchema.optional(),
  include: z.lazy(() => CardTodoIncludeSchema).optional(),
  where: CardTodoWhereInputSchema.optional(), 
  orderBy: z.union([ CardTodoOrderByWithRelationInputSchema.array(), CardTodoOrderByWithRelationInputSchema ]).optional(),
  cursor: CardTodoWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ CardTodoScalarFieldEnumSchema, CardTodoScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default CardTodoFindFirstOrThrowArgsSchema;
