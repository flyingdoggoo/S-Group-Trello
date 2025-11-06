import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ListUpdateManyMutationInputSchema } from '../inputTypeSchemas/ListUpdateManyMutationInputSchema'
import { ListUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/ListUncheckedUpdateManyInputSchema'
import { ListWhereInputSchema } from '../inputTypeSchemas/ListWhereInputSchema'

export const ListUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.ListUpdateManyAndReturnArgs> = z.object({
  data: z.union([ ListUpdateManyMutationInputSchema, ListUncheckedUpdateManyInputSchema ]),
  where: ListWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default ListUpdateManyAndReturnArgsSchema;
