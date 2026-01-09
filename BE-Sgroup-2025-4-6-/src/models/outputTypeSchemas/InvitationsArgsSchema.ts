import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InvitationsSelectSchema } from '../inputTypeSchemas/InvitationsSelectSchema';
import { InvitationsIncludeSchema } from '../inputTypeSchemas/InvitationsIncludeSchema';

export const InvitationsArgsSchema: z.ZodType<Prisma.InvitationsDefaultArgs> = z.object({
  select: z.lazy(() => InvitationsSelectSchema).optional(),
  include: z.lazy(() => InvitationsIncludeSchema).optional(),
}).strict();

export default InvitationsArgsSchema;
