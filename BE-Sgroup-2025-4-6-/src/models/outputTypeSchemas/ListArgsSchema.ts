import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ListSelectSchema } from '../inputTypeSchemas/ListSelectSchema';
import { ListIncludeSchema } from '../inputTypeSchemas/ListIncludeSchema';

export const ListArgsSchema: z.ZodType<Prisma.ListDefaultArgs> = z.object({
  select: z.lazy(() => ListSelectSchema).optional(),
  include: z.lazy(() => ListIncludeSchema).optional(),
}).strict();

export default ListArgsSchema;
