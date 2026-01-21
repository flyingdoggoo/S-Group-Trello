import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardTagCreateManyCardInputSchema } from './CardTagCreateManyCardInputSchema';

export const CardTagCreateManyCardInputEnvelopeSchema: z.ZodType<Prisma.CardTagCreateManyCardInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => CardTagCreateManyCardInputSchema), z.lazy(() => CardTagCreateManyCardInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default CardTagCreateManyCardInputEnvelopeSchema;
