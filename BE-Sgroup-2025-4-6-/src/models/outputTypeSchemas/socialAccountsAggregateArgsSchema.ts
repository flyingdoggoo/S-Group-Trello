import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { socialAccountsWhereInputSchema } from '../inputTypeSchemas/socialAccountsWhereInputSchema'
import { socialAccountsOrderByWithRelationInputSchema } from '../inputTypeSchemas/socialAccountsOrderByWithRelationInputSchema'
import { socialAccountsWhereUniqueInputSchema } from '../inputTypeSchemas/socialAccountsWhereUniqueInputSchema'

export const socialAccountsAggregateArgsSchema: z.ZodType<Prisma.socialAccountsAggregateArgs> = z.object({
  where: socialAccountsWhereInputSchema.optional(), 
  orderBy: z.union([ socialAccountsOrderByWithRelationInputSchema.array(), socialAccountsOrderByWithRelationInputSchema ]).optional(),
  cursor: socialAccountsWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default socialAccountsAggregateArgsSchema;
