import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { projectWhereInputSchema } from '../inputTypeSchemas/projectWhereInputSchema'

export const projectDeleteManyArgsSchema: z.ZodType<Prisma.projectDeleteManyArgs> = z.object({
  where: projectWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default projectDeleteManyArgsSchema;
