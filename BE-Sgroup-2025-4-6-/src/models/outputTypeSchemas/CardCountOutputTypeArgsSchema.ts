import { z } from 'zod';
import type { Prisma } from '@prisma/client';
import { CardCountOutputTypeSelectSchema } from './CardCountOutputTypeSelectSchema';

export const CardCountOutputTypeArgsSchema: z.ZodType<Prisma.CardCountOutputTypeDefaultArgs> = z.object({
  select: z.lazy(() => CardCountOutputTypeSelectSchema).nullish(),
}).strict();

export default CardCountOutputTypeSelectSchema;
