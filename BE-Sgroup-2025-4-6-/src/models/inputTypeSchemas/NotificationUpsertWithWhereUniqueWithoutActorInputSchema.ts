import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';
import { NotificationUpdateWithoutActorInputSchema } from './NotificationUpdateWithoutActorInputSchema';
import { NotificationUncheckedUpdateWithoutActorInputSchema } from './NotificationUncheckedUpdateWithoutActorInputSchema';
import { NotificationCreateWithoutActorInputSchema } from './NotificationCreateWithoutActorInputSchema';
import { NotificationUncheckedCreateWithoutActorInputSchema } from './NotificationUncheckedCreateWithoutActorInputSchema';

export const NotificationUpsertWithWhereUniqueWithoutActorInputSchema: z.ZodType<Prisma.NotificationUpsertWithWhereUniqueWithoutActorInput> = z.strictObject({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => NotificationUpdateWithoutActorInputSchema), z.lazy(() => NotificationUncheckedUpdateWithoutActorInputSchema) ]),
  create: z.union([ z.lazy(() => NotificationCreateWithoutActorInputSchema), z.lazy(() => NotificationUncheckedCreateWithoutActorInputSchema) ]),
});

export default NotificationUpsertWithWhereUniqueWithoutActorInputSchema;
