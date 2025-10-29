import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { socialAccountsIncludeSchema } from '../inputTypeSchemas/socialAccountsIncludeSchema'
import { socialAccountsUpdateInputSchema } from '../inputTypeSchemas/socialAccountsUpdateInputSchema'
import { socialAccountsUncheckedUpdateInputSchema } from '../inputTypeSchemas/socialAccountsUncheckedUpdateInputSchema'
import { socialAccountsWhereUniqueInputSchema } from '../inputTypeSchemas/socialAccountsWhereUniqueInputSchema'
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

export const socialAccountsUpdateArgsSchema: z.ZodType<Prisma.socialAccountsUpdateArgs> = z.object({
  select: socialAccountsSelectSchema.optional(),
  include: z.lazy(() => socialAccountsIncludeSchema).optional(),
  data: z.union([ socialAccountsUpdateInputSchema, socialAccountsUncheckedUpdateInputSchema ]),
  where: socialAccountsWhereUniqueInputSchema, 
}).strict();

export default socialAccountsUpdateArgsSchema;
