import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const projectCountOutputTypeSelectSchema: z.ZodType<Prisma.projectCountOutputTypeSelect> = z.object({
  members: z.boolean().optional(),
}).strict();

export default projectCountOutputTypeSelectSchema;
