import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { socialAccountsUpdateManyMutationInputSchema } from '../inputTypeSchemas/socialAccountsUpdateManyMutationInputSchema'
import { socialAccountsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/socialAccountsUncheckedUpdateManyInputSchema'
import { socialAccountsWhereInputSchema } from '../inputTypeSchemas/socialAccountsWhereInputSchema'

export const socialAccountsUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.socialAccountsUpdateManyAndReturnArgs> = z.object({
  data: z.union([ socialAccountsUpdateManyMutationInputSchema, socialAccountsUncheckedUpdateManyInputSchema ]),
  where: socialAccountsWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default socialAccountsUpdateManyAndReturnArgsSchema;
