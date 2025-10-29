import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { socialAccountsIncludeSchema } from '../inputTypeSchemas/socialAccountsIncludeSchema'
import { socialAccountsCreateInputSchema } from '../inputTypeSchemas/socialAccountsCreateInputSchema'
import { socialAccountsUncheckedCreateInputSchema } from '../inputTypeSchemas/socialAccountsUncheckedCreateInputSchema'
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

export const socialAccountsCreateArgsSchema: z.ZodType<Prisma.socialAccountsCreateArgs> = z.object({
  select: socialAccountsSelectSchema.optional(),
  include: z.lazy(() => socialAccountsIncludeSchema).optional(),
  data: z.union([ socialAccountsCreateInputSchema, socialAccountsUncheckedCreateInputSchema ]),
}).strict();

export default socialAccountsCreateArgsSchema;
