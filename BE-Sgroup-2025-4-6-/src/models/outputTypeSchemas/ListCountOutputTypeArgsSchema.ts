import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ListCountOutputTypeSelectSchema } from './ListCountOutputTypeSelectSchema';

export const ListCountOutputTypeArgsSchema: z.ZodType<Prisma.ListCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => ListCountOutputTypeSelectSchema).nullish(),
}).strict();

export default ListCountOutputTypeSelectSchema;
