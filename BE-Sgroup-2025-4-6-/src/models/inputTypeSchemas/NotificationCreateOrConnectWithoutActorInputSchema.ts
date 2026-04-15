import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';
import { NotificationCreateWithoutActorInputSchema } from './NotificationCreateWithoutActorInputSchema';
import { NotificationUncheckedCreateWithoutActorInputSchema } from './NotificationUncheckedCreateWithoutActorInputSchema';

export const NotificationCreateOrConnectWithoutActorInputSchema: z.ZodType<Prisma.NotificationCreateOrConnectWithoutActorInput> = z.strictObject({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => NotificationCreateWithoutActorInputSchema), z.lazy(() => NotificationUncheckedCreateWithoutActorInputSchema) ]),
});

export default NotificationCreateOrConnectWithoutActorInputSchema;
