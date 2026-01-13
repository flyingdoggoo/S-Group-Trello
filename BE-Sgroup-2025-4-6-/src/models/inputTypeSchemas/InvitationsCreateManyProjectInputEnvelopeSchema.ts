import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvitationsCreateManyProjectInputSchema } from './InvitationsCreateManyProjectInputSchema';

export const InvitationsCreateManyProjectInputEnvelopeSchema: z.ZodType<Prisma.InvitationsCreateManyProjectInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => InvitationsCreateManyProjectInputSchema), z.lazy(() => InvitationsCreateManyProjectInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default InvitationsCreateManyProjectInputEnvelopeSchema;
