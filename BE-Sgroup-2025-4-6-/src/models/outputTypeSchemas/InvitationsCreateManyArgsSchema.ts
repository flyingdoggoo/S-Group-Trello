import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InvitationsCreateManyInputSchema } from '../inputTypeSchemas/InvitationsCreateManyInputSchema'

export const InvitationsCreateManyArgsSchema: z.ZodType<Prisma.InvitationsCreateManyArgs> = z.object({
  data: z.union([ InvitationsCreateManyInputSchema, InvitationsCreateManyInputSchema.array() ]),
  skipDuplicates: z.boolean().optional(),
}).strict();

export default InvitationsCreateManyArgsSchema;
