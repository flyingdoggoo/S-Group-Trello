import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { projectSelectSchema } from '../inputTypeSchemas/projectSelectSchema';
import { projectIncludeSchema } from '../inputTypeSchemas/projectIncludeSchema';

export const projectArgsSchema: z.ZodType<Prisma.projectDefaultArgs> = z.object({
  select: z.lazy(() => projectSelectSchema).optional(),
  include: z.lazy(() => projectIncludeSchema).optional(),
}).strict();

export default projectArgsSchema;
