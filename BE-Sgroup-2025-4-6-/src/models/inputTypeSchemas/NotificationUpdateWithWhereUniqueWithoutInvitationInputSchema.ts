import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';
import { NotificationUpdateWithoutInvitationInputSchema } from './NotificationUpdateWithoutInvitationInputSchema';
import { NotificationUncheckedUpdateWithoutInvitationInputSchema } from './NotificationUncheckedUpdateWithoutInvitationInputSchema';

export const NotificationUpdateWithWhereUniqueWithoutInvitationInputSchema: z.ZodType<Prisma.NotificationUpdateWithWhereUniqueWithoutInvitationInput> = z.strictObject({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => NotificationUpdateWithoutInvitationInputSchema), z.lazy(() => NotificationUncheckedUpdateWithoutInvitationInputSchema) ]),
});

export default NotificationUpdateWithWhereUniqueWithoutInvitationInputSchema;
