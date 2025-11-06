import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const ListCountOutputTypeSelectSchema: z.ZodType<Prisma.ListCountOutputTypeSelect> = z.object({
  Card: z.boolean().optional(),
}).strict();

export default ListCountOutputTypeSelectSchema;
