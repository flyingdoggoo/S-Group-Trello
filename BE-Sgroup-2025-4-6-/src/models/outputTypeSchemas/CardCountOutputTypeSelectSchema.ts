import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const CardCountOutputTypeSelectSchema: z.ZodType<Prisma.CardCountOutputTypeSelect> = z.object({
  tags: z.boolean().optional(),
  todos: z.boolean().optional(),
  members: z.boolean().optional(),
  comments: z.boolean().optional(),
}).strict();

export default CardCountOutputTypeSelectSchema;
