import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersCreateWithoutNotificationsInputSchema } from './usersCreateWithoutNotificationsInputSchema';
import { usersUncheckedCreateWithoutNotificationsInputSchema } from './usersUncheckedCreateWithoutNotificationsInputSchema';

export const usersCreateOrConnectWithoutNotificationsInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutNotificationsInput> = z.strictObject({
  where: z.lazy(() => usersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => usersCreateWithoutNotificationsInputSchema), z.lazy(() => usersUncheckedCreateWithoutNotificationsInputSchema) ]),
});

export default usersCreateOrConnectWithoutNotificationsInputSchema;
