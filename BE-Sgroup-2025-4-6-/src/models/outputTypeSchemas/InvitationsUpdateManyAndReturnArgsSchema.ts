import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InvitationsUpdateManyMutationInputSchema } from '../inputTypeSchemas/InvitationsUpdateManyMutationInputSchema'
import { InvitationsUncheckedUpdateManyInputSchema } from '../inputTypeSchemas/InvitationsUncheckedUpdateManyInputSchema'
import { InvitationsWhereInputSchema } from '../inputTypeSchemas/InvitationsWhereInputSchema'

export const InvitationsUpdateManyAndReturnArgsSchema: z.ZodType<Prisma.InvitationsUpdateManyAndReturnArgs> = z.object({
  data: z.union([ InvitationsUpdateManyMutationInputSchema, InvitationsUncheckedUpdateManyInputSchema ]),
  where: InvitationsWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default InvitationsUpdateManyAndReturnArgsSchema;
