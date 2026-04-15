import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';
import { NotificationUpdateWithoutActorInputSchema } from './NotificationUpdateWithoutActorInputSchema';
import { NotificationUncheckedUpdateWithoutActorInputSchema } from './NotificationUncheckedUpdateWithoutActorInputSchema';

export const NotificationUpdateWithWhereUniqueWithoutActorInputSchema: z.ZodType<Prisma.NotificationUpdateWithWhereUniqueWithoutActorInput> = z.strictObject({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => NotificationUpdateWithoutActorInputSchema), z.lazy(() => NotificationUncheckedUpdateWithoutActorInputSchema) ]),
});

export default NotificationUpdateWithWhereUniqueWithoutActorInputSchema;
