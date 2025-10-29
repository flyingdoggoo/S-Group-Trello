import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { socialAccountsCreateManyInputSchema } from '../inputTypeSchemas/socialAccountsCreateManyInputSchema'

export const socialAccountsCreateManyAndReturnArgsSchema: z.ZodType<Prisma.socialAccountsCreateManyAndReturnArgs> = z.object({
  data: z.union([ socialAccountsCreateManyInputSchema, socialAccountsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default socialAccountsCreateManyAndReturnArgsSchema;
