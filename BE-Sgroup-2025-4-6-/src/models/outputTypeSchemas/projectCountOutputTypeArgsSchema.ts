import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { projectCountOutputTypeSelectSchema } from './projectCountOutputTypeSelectSchema';

export const projectCountOutputTypeArgsSchema: z.ZodType<Prisma.projectCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => projectCountOutputTypeSelectSchema).nullish(),
}).strict();

export default projectCountOutputTypeSelectSchema;
