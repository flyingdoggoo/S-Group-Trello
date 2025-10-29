import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { projectUpdateManyMutationInputSchema } from '../inputTypeSchemas/projectUpdateManyMutationInputSchema'
import { projectUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/projectUncheckedUpdateManyInputSchema'
import { projectWhereInputSchema } from '../inputTypeSchemas/projectWhereInputSchema'

export const projectUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.projectUpdateManyAndReturnArgs> = z.object({
  data: z.union([ projectUpdateManyMutationInputSchema, projectUncheckedUpdateManyInputSchema ]),
  where: projectWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default projectUpdateManyAndReturnArgsSchema;
