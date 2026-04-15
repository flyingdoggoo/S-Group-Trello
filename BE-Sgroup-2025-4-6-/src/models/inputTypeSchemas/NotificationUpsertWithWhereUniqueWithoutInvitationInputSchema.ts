import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';
import { NotificationUpdateWithoutInvitationInputSchema } from './NotificationUpdateWithoutInvitationInputSchema';
import { NotificationUncheckedUpdateWithoutInvitationInputSchema } from './NotificationUncheckedUpdateWithoutInvitationInputSchema';
import { NotificationCreateWithoutInvitationInputSchema } from './NotificationCreateWithoutInvitationInputSchema';
import { NotificationUncheckedCreateWithoutInvitationInputSchema } from './NotificationUncheckedCreateWithoutInvitationInputSchema';

export const NotificationUpsertWithWhereUniqueWithoutInvitationInputSchema: z.ZodType<Prisma.NotificationUpsertWithWhereUniqueWithoutInvitationInput> = z.strictObject({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => NotificationUpdateWithoutInvitationInputSchema), z.lazy(() => NotificationUncheckedUpdateWithoutInvitationInputSchema) ]),
  create: z.union([ z.lazy(() => NotificationCreateWithoutInvitationInputSchema), z.lazy(() => NotificationUncheckedCreateWithoutInvitationInputSchema) ]),
});

export default NotificationUpsertWithWhereUniqueWithoutInvitationInputSchema;
