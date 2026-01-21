import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { BoardArgsSchema } from "../outputTypeSchemas/BoardArgsSchema"
import { CardFindManyArgsSchema } from "../outputTypeSchemas/CardFindManyArgsSchema"
import { ListCountOutputTypeArgsSchema } from "../outputTypeSchemas/ListCountOutputTypeArgsSchema"

export const ListIncludeSchema: z.ZodType<Prisma.ListInclude> = z.object({
  board: z.union([z.boolean(),z.lazy(() => BoardArgsSchema)]).optional(),
  Card: z.union([z.boolean(),z.lazy(() => CardFindManyArgsSchema)]).optional(),
  _count: z.union([z.boolean(),z.lazy(() => ListCountOutputTypeArgsSchema)]).optional(),
}).strict();

export default ListIncludeSchema;
