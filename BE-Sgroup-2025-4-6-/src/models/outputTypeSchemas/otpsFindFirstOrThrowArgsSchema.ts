import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { otpsIncludeSchema } from '../inputTypeSchemas/otpsIncludeSchema'
import { otpsWhereInputSchema } from '../inputTypeSchemas/otpsWhereInputSchema'
import { otpsOrderByWithRelationInputSchema } from '../inputTypeSchemas/otpsOrderByWithRelationInputSchema'
import { otpsWhereUniqueInputSchema } from '../inputTypeSchemas/otpsWhereUniqueInputSchema'
import { OtpsScalarFieldEnumSchema } from '../inputTypeSchemas/OtpsScalarFieldEnumSchema'
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

export const otpsFindFirstOrThrowArgsSchema: z.ZodType<Prisma.otpsFindFirstOrThrowArgs> = z.object({
  select: otpsSelectSchema.optional(),
  include: z.lazy(() => otpsIncludeSchema).optional(),
  where: otpsWhereInputSchema.optional(), 
  orderBy: z.union([ otpsOrderByWithRelationInputSchema.array(), otpsOrderByWithRelationInputSchema ]).optional(),
  cursor: otpsWhereUniqueInputSchema.optional(), 
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.union([ OtpsScalarFieldEnumSchema, OtpsScalarFieldEnumSchema.array() ]).optional(),
}).strict();

export default otpsFindFirstOrThrowArgsSchema;
