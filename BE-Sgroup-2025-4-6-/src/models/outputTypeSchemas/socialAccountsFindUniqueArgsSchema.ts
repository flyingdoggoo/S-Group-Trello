import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { socialAccountsIncludeSchema } from '../inputTypeSchemas/socialAccountsIncludeSchema'
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

export const socialAccountsFindUniqueArgsSchema: z.ZodType<Prisma.socialAccountsFindUniqueArgs> = z.object({
  select: socialAccountsSelectSchema.optional(),
  include: z.lazy(() => socialAccountsIncludeSchema).optional(),
  where: socialAccountsWhereUniqueInputSchema, 
}).strict();

export default socialAccountsFindUniqueArgsSchema;
