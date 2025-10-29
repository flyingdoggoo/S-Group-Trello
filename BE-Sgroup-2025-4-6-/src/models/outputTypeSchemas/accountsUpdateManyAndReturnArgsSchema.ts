import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { accountsUpdateManyMutationInputSchema } from '../inputTypeSchemas/accountsUpdateManyMutationInputSchema'
import { accountsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/accountsUncheckedUpdateManyInputSchema'
import { accountsWhereInputSchema } from '../inputTypeSchemas/accountsWhereInputSchema'

export const accountsUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.accountsUpdateManyAndReturnArgs> = z.object({
  data: z.union([ accountsUpdateManyMutationInputSchema, accountsUncheckedUpdateManyInputSchema ]),
  where: accountsWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default accountsUpdateManyAndReturnArgsSchema;
