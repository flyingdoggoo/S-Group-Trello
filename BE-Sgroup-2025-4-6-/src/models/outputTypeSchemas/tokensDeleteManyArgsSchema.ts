import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { tokensWhereInputSchema } from '../inputTypeSchemas/tokensWhereInputSchema'

export const tokensDeleteManyArgsSchema: z.ZodType<Prisma.tokensDeleteManyArgs> = z.object({
  where: tokensWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default tokensDeleteManyArgsSchema;
