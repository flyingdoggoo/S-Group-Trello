import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { otpsWhereInputSchema } from '../inputTypeSchemas/otpsWhereInputSchema'

export const otpsDeleteManyArgsSchema: z.ZodType<Prisma.otpsDeleteManyArgs> = z.object({
  where: otpsWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default otpsDeleteManyArgsSchema;
