import { z } from 'zod';
import type { Prisma } from '@prisma/client';

export const BoardCountOutputTypeSelectSchema: z.ZodType<Prisma.BoardCountOutputTypeSelect> = z.object({
  List: z.boolean().optional(),
  BoardMember: z.boolean().optional(),
}).strict();

export default BoardCountOutputTypeSelectSchema;
