import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationCreateWithoutActorInputSchema } from './NotificationCreateWithoutActorInputSchema';
import { NotificationUncheckedCreateWithoutActorInputSchema } from './NotificationUncheckedCreateWithoutActorInputSchema';
import { NotificationCreateOrConnectWithoutActorInputSchema } from './NotificationCreateOrConnectWithoutActorInputSchema';
import { NotificationCreateManyActorInputEnvelopeSchema } from './NotificationCreateManyActorInputEnvelopeSchema';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';

export const NotificationCreateNestedManyWithoutActorInputSchema: z.ZodType<Prisma.NotificationCreateNestedManyWithoutActorInput> = z.strictObject({
  create: z.union([ z.lazy(() => NotificationCreateWithoutActorInputSchema), z.lazy(() => NotificationCreateWithoutActorInputSchema).array(), z.lazy(() => NotificationUncheckedCreateWithoutActorInputSchema), z.lazy(() => NotificationUncheckedCreateWithoutActorInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => NotificationCreateOrConnectWithoutActorInputSchema), z.lazy(() => NotificationCreateOrConnectWithoutActorInputSchema).array() ]).optional(),
  createMany: z.lazy(() => NotificationCreateManyActorInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => NotificationWhereUniqueInputSchema), z.lazy(() => NotificationWhereUniqueInputSchema).array() ]).optional(),
});

export default NotificationCreateNestedManyWithoutActorInputSchema;
