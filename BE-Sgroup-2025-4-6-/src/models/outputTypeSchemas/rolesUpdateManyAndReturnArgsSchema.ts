import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { rolesUpdateManyMutationInputSchema } from '../inputTypeSchemas/rolesUpdateManyMutationInputSchema'
import { rolesUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/rolesUncheckedUpdateManyInputSchema'
import { rolesWhereInputSchema } from '../inputTypeSchemas/rolesWhereInputSchema'

export const rolesUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.rolesUpdateManyAndReturnArgs> = z.object({
  data: z.union([ rolesUpdateManyMutationInputSchema, rolesUncheckedUpdateManyInputSchema ]),
  where: rolesWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default rolesUpdateManyAndReturnArgsSchema;
