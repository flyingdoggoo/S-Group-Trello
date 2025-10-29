import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { permissionCreateManyInputSchema } from '../inputTypeSchemas/permissionCreateManyInputSchema'

export const permissionCreateManyAndReturnArgsSchema: z.ZodType<Prisma.permissionCreateManyAndReturnArgs> = z.object({
  data: z.union([ permissionCreateManyInputSchema, permissionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default permissionCreateManyAndReturnArgsSchema;
