import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationCreateManyInvitationInputSchema } from './NotificationCreateManyInvitationInputSchema';

export const NotificationCreateManyInvitationInputEnvelopeSchema: z.ZodType<Prisma.NotificationCreateManyInvitationInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => NotificationCreateManyInvitationInputSchema), z.lazy(() => NotificationCreateManyInvitationInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default NotificationCreateManyInvitationInputEnvelopeSchema;
