import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BoardCountOutputTypeSelectSchema } from './BoardCountOutputTypeSelectSchema';

export const BoardCountOutputTypeArgsSchema: z.ZodType<Prisma.BoardCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => BoardCountOutputTypeSelectSchema).nullish(),
}).strict();

export default BoardCountOutputTypeSelectSchema;
