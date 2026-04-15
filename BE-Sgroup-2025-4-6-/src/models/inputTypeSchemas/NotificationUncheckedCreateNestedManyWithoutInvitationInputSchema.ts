import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationCreateWithoutInvitationInputSchema } from './NotificationCreateWithoutInvitationInputSchema';
import { NotificationUncheckedCreateWithoutInvitationInputSchema } from './NotificationUncheckedCreateWithoutInvitationInputSchema';
import { NotificationCreateOrConnectWithoutInvitationInputSchema } from './NotificationCreateOrConnectWithoutInvitationInputSchema';
import { NotificationCreateManyInvitationInputEnvelopeSchema } from './NotificationCreateManyInvitationInputEnvelopeSchema';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';

export const NotificationUncheckedCreateNestedManyWithoutInvitationInputSchema: z.ZodType<Prisma.NotificationUncheckedCreateNestedManyWithoutInvitationInput> = z.strictObject({
  create: z.union([ z.lazy(() => NotificationCreateWithoutInvitationInputSchema), z.lazy(() => NotificationCreateWithoutInvitationInputSchema).array(), z.lazy(() => NotificationUncheckedCreateWithoutInvitationInputSchema), z.lazy(() => NotificationUncheckedCreateWithoutInvitationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationCreateOrConnectWithoutInvitationInputSchema), z.lazy(() => NotificationCreateOrConnectWithoutInvitationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationCreateManyInvitationInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema), z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
});

export default NotificationUncheckedCreateNestedManyWithoutInvitationInputSchema;
