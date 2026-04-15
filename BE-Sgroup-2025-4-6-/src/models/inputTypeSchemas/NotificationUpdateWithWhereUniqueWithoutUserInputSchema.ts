import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';
import { NotificationUpdateWithoutUserInputSchema } from './NotificationUpdateWithoutUserInputSchema';
import { NotificationUncheckedUpdateWithoutUserInputSchema } from './NotificationUncheckedUpdateWithoutUserInputSchema';

export const NotificationUpdateWithWhereUniqueWithoutUserInputSchema: z.ZodType<Prisma.NotificationUpdateWithWhereUniqueWithoutUserInput> = z.strictObject({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => NotificationUpdateWithoutUserInputSchema), z.lazy(() => NotificationUncheckedUpdateWithoutUserInputSchema) ]),
});

export default NotificationUpdateWithWhereUniqueWithoutUserInputSchema;
