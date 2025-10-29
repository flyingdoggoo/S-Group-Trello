import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { projectCreateManyInputSchema } from '../inputTypeSchemas/projectCreateManyInputSchema'

export const projectCreateManyAndReturnArgsSchema: z.ZodType<Prisma.projectCreateManyAndReturnArgs> = z.object({
  data: z.union([ projectCreateManyInputSchema, projectCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default projectCreateManyAndReturnArgsSchema;
