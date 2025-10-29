import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { socialAccountsIncludeSchema } from '../inputTypeSchemas/socialAccountsIncludeSchema'
import { socialAccountsWhereInputSchema } from '../inputTypeSchemas/socialAccountsWhereInputSchema'
import { socialAccountsOrderByWithRelationInputSchema } from '../inputTypeSchemas/socialAccountsOrderByWithRelationInputSchema'
import { socialAccountsWhereUniqueInputSchema } from '../inputTypeSchemas/socialAccountsWhereUniqueInputSchema'
import { SocialAccountsScalarFieldEnumSchema } from '../inputTypeSchemas/SocialAccountsScalarFieldEnumSchema'
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const socialAccountsSelectSchema: z.ZodType<Prisma.socialAccountsSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  googleId: z.boolean().optional(),
  googleAccessToken: z.boolean().optional(),
  googleRefreshToken: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
}).strict()

export const socialAccountsFindManyArgsSchema: z.ZodType<Prisma.socialAccountsFindManyArgs> = z.object({
  select: socialAccountsSelectSchema.optional(),
  include: z.lazy(() => socialAccountsIncludeSchema).optional(),
  where: socialAccountsWhereInputSchema.optional(), 
  orderBy: z.union([ socialAccountsOrderByWithRelationInputSchema.array(), socialAccountsOrderByWithRelationInputSchema ]).optional(),
  cursor: socialAccountsWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ SocialAccountsScalarFieldEnumSchema, SocialAccountsScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default socialAccountsFindManyArgsSchema;
