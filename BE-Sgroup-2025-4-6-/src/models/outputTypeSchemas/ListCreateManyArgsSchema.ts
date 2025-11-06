import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ListCreateManyInputSchema } from '../inputTypeSchemas/ListCreateManyInputSchema'

export const ListCreateManyArgsSchema: z.ZodType<Prisma.ListCreateManyArgs> = z.object({
  data: z.union([ ListCreateManyInputSchema, ListCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default ListCreateManyArgsSchema;
