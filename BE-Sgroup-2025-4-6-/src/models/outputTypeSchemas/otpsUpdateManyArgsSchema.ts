import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { otpsUpdateManyMutationInputSchema } from '../inputTypeSchemas/otpsUpdateManyMutationInputSchema'
import { otpsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/otpsUncheckedUpdateManyInputSchema'
import { otpsWhereInputSchema } from '../inputTypeSchemas/otpsWhereInputSchema'

export const otpsUpdateManyArgsSchema: z.ZodType<Prisma.otpsUpdateManyArgs> = z.object({
  data: z.union([ otpsUpdateManyMutationInputSchema, otpsUncheckedUpdateManyInputSchema ]),
  where: otpsWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default otpsUpdateManyArgsSchema;
