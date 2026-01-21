import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardMemberCreateManyCardInputSchema } from './CardMemberCreateManyCardInputSchema';

export const CardMemberCreateManyCardInputEnvelopeSchema: z.ZodType<Prisma.CardMemberCreateManyCardInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => CardMemberCreateManyCardInputSchema), z.lazy(() => CardMemberCreateManyCardInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default CardMemberCreateManyCardInputEnvelopeSchema;
