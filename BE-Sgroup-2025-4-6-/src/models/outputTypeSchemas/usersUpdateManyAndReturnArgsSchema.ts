import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { usersUpdateManyMutationInputSchema } from '../inputTypeSchemas/usersUpdateManyMutationInputSchema'
import { usersUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/usersUncheckedUpdateManyInputSchema'
import { usersWhereInputSchema } from '../inputTypeSchemas/usersWhereInputSchema'

export const usersUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.usersUpdateManyAndReturnArgs> = z.object({
  data: z.union([ usersUpdateManyMutationInputSchema, usersUncheckedUpdateManyInputSchema ]),
  where: usersWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default usersUpdateManyAndReturnArgsSchema;
