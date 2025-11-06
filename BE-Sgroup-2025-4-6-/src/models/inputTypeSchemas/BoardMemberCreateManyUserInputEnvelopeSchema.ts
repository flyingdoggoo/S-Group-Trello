import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardMemberCreateManyUserInputSchema } from './BoardMemberCreateManyUserInputSchema';

export const BoardMemberCreateManyUserInputEnvelopeSchema: z.ZodType<Prisma.BoardMemberCreateManyUserInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => BoardMemberCreateManyUserInputSchema), z.lazy(() => BoardMemberCreateManyUserInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default BoardMemberCreateManyUserInputEnvelopeSchema;
