import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const InvitationsCountOutputTypeSelectSchema: z.ZodType<Prisma.InvitationsCountOutputTypeSelect> = z.object({
  notifications: z.boolean().optional(),
}).strict();

export default InvitationsCountOutputTypeSelectSchema;
