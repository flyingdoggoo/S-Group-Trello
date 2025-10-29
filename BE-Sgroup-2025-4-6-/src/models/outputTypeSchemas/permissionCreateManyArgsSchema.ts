import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { permissionCreateManyInputSchema } from '../inputTypeSchemas/permissionCreateManyInputSchema'

export const permissionCreateManyArgsSchema: z.ZodType<Prisma.permissionCreateManyArgs> = z.object({
  data: z.union([ permissionCreateManyInputSchema, permissionCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default permissionCreateManyArgsSchema;
