import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InvitationsWhereInputSchema } from '../inputTypeSchemas/InvitationsWhereInputSchema'

export const InvitationsDeleteManyArgsSchema: z.ZodType<Prisma.InvitationsDeleteManyArgs> = z.object({
  where: InvitationsWhereInputSchema.optional(), 
  limit: z.number().optional(),
}).strict();

export default InvitationsDeleteManyArgsSchema;
