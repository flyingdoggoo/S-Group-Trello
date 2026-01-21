import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardCreateManyListInputSchema } from './CardCreateManyListInputSchema';

export const CardCreateManyListInputEnvelopeSchema: z.ZodType<Prisma.CardCreateManyListInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => CardCreateManyListInputSchema), z.lazy(() => CardCreateManyListInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default CardCreateManyListInputEnvelopeSchema;
