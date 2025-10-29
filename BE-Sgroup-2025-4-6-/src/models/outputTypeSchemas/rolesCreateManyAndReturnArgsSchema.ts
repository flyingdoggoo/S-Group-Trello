import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { rolesCreateManyInputSchema } from '../inputTypeSchemas/rolesCreateManyInputSchema'

export const rolesCreateManyAndReturnArgsSchema: z.ZodType<Prisma.rolesCreateManyAndReturnArgs> = z.object({
  data: z.union([ rolesCreateManyInputSchema, rolesCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default rolesCreateManyAndReturnArgsSchema;
