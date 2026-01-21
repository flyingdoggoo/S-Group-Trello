import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardMemberCreateManyBoardInputSchema } from './BoardMemberCreateManyBoardInputSchema';

export const BoardMemberCreateManyBoardInputEnvelopeSchema: z.ZodType<Prisma.BoardMemberCreateManyBoardInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => BoardMemberCreateManyBoardInputSchema), z.lazy(() => BoardMemberCreateManyBoardInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default BoardMemberCreateManyBoardInputEnvelopeSchema;
