import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardTagSelectSchema } from '../inputTypeSchemas/CardTagSelectSchema';
import { CardTagIncludeSchema } from '../inputTypeSchemas/CardTagIncludeSchema';

export const CardTagArgsSchema: z.ZodType<Prisma.CardTagDefaultArgs> = z.object({
  select: z.lazy(() => CardTagSelectSchema).optional(),
  include: z.lazy(() => CardTagIncludeSchema).optional(),
}).strict();

export default CardTagArgsSchema;
