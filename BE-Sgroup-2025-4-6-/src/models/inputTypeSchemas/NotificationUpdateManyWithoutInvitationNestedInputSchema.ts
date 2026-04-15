import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationCreateWithoutInvitationInputSchema } from './NotificationCreateWithoutInvitationInputSchema';
import { NotificationUncheckedCreateWithoutInvitationInputSchema } from './NotificationUncheckedCreateWithoutInvitationInputSchema';
import { NotificationCreateOrConnectWithoutInvitationInputSchema } from './NotificationCreateOrConnectWithoutInvitationInputSchema';
import { NotificationUpsertWithWhereUniqueWithoutInvitationInputSchema } from './NotificationUpsertWithWhereUniqueWithoutInvitationInputSchema';
import { NotificationCreateManyInvitationInputEnvelopeSchema } from './NotificationCreateManyInvitationInputEnvelopeSchema';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';
import { NotificationUpdateWithWhereUniqueWithoutInvitationInputSchema } from './NotificationUpdateWithWhereUniqueWithoutInvitationInputSchema';
import { NotificationUpdateManyWithWhereWithoutInvitationInputSchema } from './NotificationUpdateManyWithWhereWithoutInvitationInputSchema';
import { NotificationScalarWhereInputSchema } from './NotificationScalarWhereInputSchema';

export const NotificationUpdateManyWithoutInvitationNestedInputSchema: z.ZodType<Prisma.NotificationUpdateManyWithoutInvitationNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => NotificationCreateWithoutInvitationInputSchema), z.lazy(() => NotificationCreateWithoutInvitationInputSchema).array(), z.lazy(() => NotificationUncheckedCreateWithoutInvitationInputSchema), z.lazy(() => NotificationUncheckedCreateWithoutInvitationInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationCreateOrConnectWithoutInvitationInputSchema), z.lazy(() => NotificationCreateOrConnectWithoutInvitationInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => NotificationUpsertWithWhereUniqueWithoutInvitationInputSchema), z.lazy(() => NotificationUpsertWithWhereUniqueWithoutInvitationInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationCreateManyInvitationInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema), z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema), z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema), z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema), z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => NotificationUpdateWithWhereUniqueWithoutInvitationInputSchema), z.lazy(() => NotificationUpdateWithWhereUniqueWithoutInvitationInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => NotificationUpdateManyWithWhereWithoutInvitationInputSchema), z.lazy(() => NotificationUpdateManyWithWhereWithoutInvitationInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => NotificationScalarWhereInputSchema), z.lazy(() => NotificationScalarWhereInputSchema).array() ]).optional(),
});

export default NotificationUpdateManyWithoutInvitationNestedInputSchema;
