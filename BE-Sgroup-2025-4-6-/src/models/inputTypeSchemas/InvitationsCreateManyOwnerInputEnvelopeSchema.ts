import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { InvitationsCreateManyOwnerInputSchema } from './InvitationsCreateManyOwnerInputSchema';

export const InvitationsCreateManyOwnerInputEnvelopeSchema: z.ZodType<Prisma.InvitationsCreateManyOwnerInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => InvitationsCreateManyOwnerInputSchema), z.lazy(() => InvitationsCreateManyOwnerInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default InvitationsCreateManyOwnerInputEnvelopeSchema;
