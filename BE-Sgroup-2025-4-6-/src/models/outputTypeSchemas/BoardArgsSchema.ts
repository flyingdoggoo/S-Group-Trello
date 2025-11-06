import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BoardSelectSchema } from '../inputTypeSchemas/BoardSelectSchema';
import { BoardIncludeSchema } from '../inputTypeSchemas/BoardIncludeSchema';

export const BoardArgsSchema: z.ZodType<Prisma.BoardDefaultArgs> = z.object({
  select: z.lazy(() => BoardSelectSchema).optional(),
  include: z.lazy(() => BoardIncludeSchema).optional(),
}).strict();

export default BoardArgsSchema;
