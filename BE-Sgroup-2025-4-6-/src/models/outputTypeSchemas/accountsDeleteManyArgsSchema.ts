import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { accountsWhereInputSchema } from '../inputTypeSchemas/accountsWhereInputSchema'

export const accountsDeleteManyArgsSchema: z.ZodType<Prisma.accountsDeleteManyArgs> = z.object({
  where: accountsWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default accountsDeleteManyArgsSchema;
