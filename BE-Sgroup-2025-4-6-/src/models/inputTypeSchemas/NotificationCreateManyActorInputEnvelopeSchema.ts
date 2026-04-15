import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationCreateManyActorInputSchema } from './NotificationCreateManyActorInputSchema';

export const NotificationCreateManyActorInputEnvelopeSchema: z.ZodType<Prisma.NotificationCreateManyActorInputEnvelope> = z.strictObject({
  data: z.union([ z.lazy(() => NotificationCreateManyActorInputSchema), z.lazy(() => NotificationCreateManyActorInputSchema).array() ]),
  skipDuplicates: z.boolean().optional(),
});

export default NotificationCreateManyActorInputEnvelopeSchema;
