import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { CardMemberCreateManyUserInputSchema } from './CardMemberCreateManyUserInputSchema';

export const CardMemberCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.CardMemberCreateManyUserInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => CardMemberCreateManyUserInputSchema), z.lazy(() => CardMemberCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default CardMemberCreateManyUserInputEnvelopeSchema;
