import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { socialAccountsWhereInputSchema } from '../inputTypeSchemas/socialAccountsWhereInputSchema'

export const socialAccountsDeleteManyArgsSchema: z.ZodType<Prisma.socialAccountsDeleteManyArgs> = z.object({
  where: socialAccountsWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default socialAccountsDeleteManyArgsSchema;
