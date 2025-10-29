import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { projectUpdateManyMutationInputSchema } from '../inputTypeSchemas/projectUpdateManyMutationInputSchema'
import { projectUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/projectUncheckedUpdateManyInputSchema'
import { projectWhereInputSchema } from '../inputTypeSchemas/projectWhereInputSchema'

export const projectUpdateManyArgsSchema: z.ZodType<Prisma.projectUpdateManyArgs> = z.object({
  data: z.union([ projectUpdateManyMutationInputSchema, projectUncheckedUpdateManyInputSchema ]),
  where: projectWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default projectUpdateManyArgsSchema;
