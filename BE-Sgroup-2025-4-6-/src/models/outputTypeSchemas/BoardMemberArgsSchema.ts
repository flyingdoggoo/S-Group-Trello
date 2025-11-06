import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BoardMemberSelectSchema } from '../inputTypeSchemas/BoardMemberSelectSchema';
import { BoardMemberIncludeSchema } from '../inputTypeSchemas/BoardMemberIncludeSchema';

export const BoardMemberArgsSchema: z.ZodType<Prisma.BoardMemberDefaultArgs> = z.object({
  select: z.lazy(() => BoardMemberSelectSchema).optional(),
  include: z.lazy(() => BoardMemberIncludeSchema).optional(),
}).strict();

export default BoardMemberArgsSchema;
