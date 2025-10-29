import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { socialAccountsWhereInputSchema } from '../inputTypeSchemas/socialAccountsWhereInputSchema'
import { socialAccountsOrderByWithAggregationInputSchema } from '../inputTypeSchemas/socialAccountsOrderByWithAggregationInputSchema'
import { SocialAccountsScalarFieldEnumSchema } from '../inputTypeSchemas/SocialAccountsScalarFieldEnumSchema'
import { socialAccountsScalarWhereWithAggregatesInputSchema } from '../inputTypeSchemas/socialAccountsScalarWhereWithAggregatesInputSchema'

export const socialAccountsGroupByArgsSchema: z.ZodType<Prisma.socialAccountsGroupByArgs> = z.object({
  where: socialAccountsWhereInputSchema.optional(), 
  orderBy: z.union([ socialAccountsOrderByWithAggregationInputSchema.array(), socialAccountsOrderByWithAggregationInputSchema ]).optional(),
  by: SocialAccountsScalarFieldEnumSchema.array(), 
  having: socialAccountsScalarWhereWithAggregatesInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
}).strict();

export default socialAccountsGroupByArgsSchema;
