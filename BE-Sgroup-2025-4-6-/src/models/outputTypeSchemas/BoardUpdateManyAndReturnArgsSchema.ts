import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BoardUpdateManyMutationInputSchema } from '../inputTypeSchemas/BoardUpdateManyMutationInputSchema'
import { BoardUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/BoardUncheckedUpdateManyInputSchema'
import { BoardWhereInputSchema } from '../inputTypeSchemas/BoardWhereInputSchema'

export const BoardUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.BoardUpdateManyAndReturnArgs> = z.object({
  data: z.union([ BoardUpdateManyMutationInputSchema, BoardUncheckedUpdateManyInputSchema ]),
  where: BoardWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default BoardUpdateManyAndReturnArgsSchema;
