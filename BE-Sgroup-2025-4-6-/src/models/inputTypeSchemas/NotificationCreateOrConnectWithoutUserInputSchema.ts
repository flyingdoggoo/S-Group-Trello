import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { NotificationWhereUniqueInputSchema } from './NotificationWhereUniqueInputSchema';
import { NotificationCreateWithoutUserInputSchema } from './NotificationCreateWithoutUserInputSchema';
import { NotificationUncheckedCreateWithoutUserInputSchema } from './NotificationUncheckedCreateWithoutUserInputSchema';

export const NotificationCreateOrConnectWithoutUserInputSchema: z.ZodType<Prisma.NotificationCreateOrConnectWithoutUserInput> = z.strictObject({
  where: z.lazy(() => NotificationWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => NotificationCreateWithoutUserInputSchema), z.lazy(() => NotificationUncheckedCreateWithoutUserInputSchema) ]),
});

export default NotificationCreateOrConnectWithoutUserInputSchema;
