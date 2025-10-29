import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const usersCountOutputTypeSelectSchema: z.ZodType<Prisma.usersCountOutputTypeSelect> = z.object({
  tokens: z.boolean().optional(),
  projectMembers: z.boolean().optional(),
  UserRole: z.boolean().optional(),
}).strict();

export default usersCountOutputTypeSelectSchema;
