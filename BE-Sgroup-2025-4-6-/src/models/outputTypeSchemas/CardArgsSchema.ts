import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardSelectSchema } from '../inputTypeSchemas/CardSelectSchema';
import { CardIncludeSchema } from '../inputTypeSchemas/CardIncludeSchema';

export const CardArgsSchema: z.ZodType<Prisma.CardDefaultArgs> = z.object({
  select: z.lazy(() => CardSelectSchema).optional(),
  include: z.lazy(() => CardIncludeSchema).optional(),
}).strict();

export default CardArgsSchema;
