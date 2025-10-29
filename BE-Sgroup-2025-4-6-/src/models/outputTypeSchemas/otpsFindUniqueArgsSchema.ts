import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { otpsIncludeSchema } from '../inputTypeSchemas/otpsIncludeSchema'
import { otpsWhereUniqueInputSchema } from '../inputTypeSchemas/otpsWhereUniqueInputSchema'
import { usersArgsSchema } from "../outputTypeSchemas/usersArgsSchema"
// Select schema needs to be in file to prevent circular imports
//------------------------------------------------------

export const otpsSelectSchema: z.ZodType<Prisma.otpsSelect> = z.object({
  id: z.boolean().optional(),
  userId: z.boolean().optional(),
  otp: z.boolean().optional(),
  expiresAt: z.boolean().optional(),
  user: z.union([z.boolean(),z.lazy(() => usersArgsSchema)]).optional(),
}).strict()

export const otpsFindUniqueArgsSchema: z.ZodType<Prisma.otpsFindUniqueArgs> = z.object({
  select: otpsSelectSchema.optional(),
  include: z.lazy(() => otpsIncludeSchema).optional(),
  where: otpsWhereUniqueInputSchema, 
}).strict();

export default otpsFindUniqueArgsSchema;
