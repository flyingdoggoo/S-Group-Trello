import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';
import { NotificationCreateWithoutInvitationInputSchema } from './NotificationCreateWithoutInvitationInputSchema';
import { NotificationUncheckedCreateWithoutInvitationInputSchema } from './NotificationUncheckedCreateWithoutInvitationInputSchema';

export const NotificationCreateOrConnectWithoutInvitationInputSchema: z.ZodType<Prisma.NotificationCreateOrConnectWithoutInvitationInput> = z.strictObject({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => NotificationCreateWithoutInvitationInputSchema), z.lazy(() => NotificationUncheckedCreateWithoutInvitationInputSchema) ]),
});

export default NotificationCreateOrConnectWithoutInvitationInputSchema;
