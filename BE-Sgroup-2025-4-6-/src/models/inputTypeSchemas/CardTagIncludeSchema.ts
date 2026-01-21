import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardArgsSchema } from "../outputTypeSchemas/CardArgsSchema"

export const CardTagIncludeSchema: z.ZodType<Prisma.CardTagInclude> = z.object({
  card: z.union([z.boolean(),z.lazy(() => CardArgsSchema)]).optional(),
}).strict();

export default CardTagIncludeSchema;
