import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvitationsCreateManyBoardInputSchema } from './InvitationsCreateManyBoardInputSchema';

export const InvitationsCreateManyBoardInputEnvelopeSchema: z.ZodType<Prisma.InvitationsCreateManyBoardInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => InvitationsCreateManyBoardInputSchema), z.lazy(() => InvitationsCreateManyBoardInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default InvitationsCreateManyBoardInputEnvelopeSchema;
