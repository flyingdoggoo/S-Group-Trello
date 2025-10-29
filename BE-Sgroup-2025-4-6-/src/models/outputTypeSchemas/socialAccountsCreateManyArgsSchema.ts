import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { socialAccountsCreateManyInputSchema } from '../inputTypeSchemas/socialAccountsCreateManyInputSchema'

export const socialAccountsCreateManyArgsSchema: z.ZodType<Prisma.socialAccountsCreateManyArgs> = z.object({
  data: z.union([ socialAccountsCreateManyInputSchema, socialAccountsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default socialAccountsCreateManyArgsSchema;
