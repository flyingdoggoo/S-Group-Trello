import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { InvitationsCountOutputTypeSelectSchema } from './InvitationsCountOutputTypeSelectSchema';

export const InvitationsCountOutputTypeArgsSchema: z.ZodType<Prisma.InvitationsCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => InvitationsCountOutputTypeSelectSchema).nullish(),
}).strict();

export default InvitationsCountOutputTypeSelectSchema;
