import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardCommentCreateManyCardInputSchema } from './CardCommentCreateManyCardInputSchema';

export const CardCommentCreateManyCardInputEnvelopeSchema: z.ZodType<Prisma.CardCommentCreateManyCardInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => CardCommentCreateManyCardInputSchema), z.lazy(() => CardCommentCreateManyCardInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default CardCommentCreateManyCardInputEnvelopeSchema;
