import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BoardMemberUpdateManyMutationInputSchema } from '../inputTypeSchemas/BoardMemberUpdateManyMutationInputSchema'
import { BoardMemberUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/BoardMemberUncheckedUpdateManyInputSchema'
import { BoardMemberWhereInputSchema } from '../inputTypeSchemas/BoardMemberWhereInputSchema'

export const BoardMemberUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.BoardMemberUpdateManyAndReturnArgs> = z.object({
  data: z.union([ BoardMemberUpdateManyMutationInputSchema, BoardMemberUncheckedUpdateManyInputSchema ]),
  where: BoardMemberWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default BoardMemberUpdateManyAndReturnArgsSchema;
