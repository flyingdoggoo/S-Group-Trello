import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { socialAccountsUpdateManyMutationInputSchema } from '../inputTypeSchemas/socialAccountsUpdateManyMutationInputSchema'
import { socialAccountsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/socialAccountsUncheckedUpdateManyInputSchema'
import { socialAccountsWhereInputSchema } from '../inputTypeSchemas/socialAccountsWhereInputSchema'

export const socialAccountsUpdateManyArgsSchema: z.ZodType<Prisma.socialAccountsUpdateManyArgs> = z.object({
  data: z.union([ socialAccountsUpdateManyMutationInputSchema, socialAccountsUncheckedUpdateManyInputSchema ]),
  where: socialAccountsWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default socialAccountsUpdateManyArgsSchema;
