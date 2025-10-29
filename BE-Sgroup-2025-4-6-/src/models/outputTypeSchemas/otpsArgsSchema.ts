import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { otpsSelectSchema } from '../inputTypeSchemas/otpsSelectSchema';
import { otpsIncludeSchema } from '../inputTypeSchemas/otpsIncludeSchema';

export const otpsArgsSchema: z.ZodType<Prisma.otpsDefaultArgs> = z.object({
  select: z.lazy(() => otpsSelectSchema).optional(),
  include: z.lazy(() => otpsIncludeSchema).optional(),
}).strict();

export default otpsArgsSchema;
