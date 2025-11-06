import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ListUpdateManyMutationInputSchema } from '../inputTypeSchemas/ListUpdateManyMutationInputSchema'
import { ListUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ListUncheckedUpdateManyInputSchema'
import { ListWhereInputSchema } from '../inputTypeSchemas/ListWhereInputSchema'

export const ListUpdateManyArgsSchema: z.ZodType<Prisma.ListUpdateManyArgs> = z.object({
  data: z.union([ ListUpdateManyMutationInputSchema, ListUncheckedUpdateManyInputSchema ]),
  where: ListWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default ListUpdateManyArgsSchema;
