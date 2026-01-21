import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardCommentCreateManyUserInputSchema } from './CardCommentCreateManyUserInputSchema';

export const CardCommentCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.CardCommentCreateManyUserInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => CardCommentCreateManyUserInputSchema), z.lazy(() => CardCommentCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default CardCommentCreateManyUserInputEnvelopeSchema;
