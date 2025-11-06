import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { ListArgsSchema } from "../outputTypeSchemas/ListArgsSchema"

export const CardIncludeSchema: z.ZodType<Prisma.CardInclude> = z.object({
  list: z.union([z.boolean(),z.lazy(() => ListArgsSchema)]).optional(),
}).strict();

export default CardIncludeSchema;
