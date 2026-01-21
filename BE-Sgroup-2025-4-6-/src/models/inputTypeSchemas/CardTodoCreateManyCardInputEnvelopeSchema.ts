import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardTodoCreateManyCardInputSchema } from './CardTodoCreateManyCardInputSchema';

export const CardTodoCreateManyCardInputEnvelopeSchema: z.ZodType<Prisma.CardTodoCreateManyCardInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => CardTodoCreateManyCardInputSchema), z.lazy(() => CardTodoCreateManyCardInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default CardTodoCreateManyCardInputEnvelopeSchema;
