import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersUpdateWithoutNotificationsInputSchema } from './usersUpdateWithoutNotificationsInputSchema';
import { usersUncheckedUpdateWithoutNotificationsInputSchema } from './usersUncheckedUpdateWithoutNotificationsInputSchema';
import { usersCreateWithoutNotificationsInputSchema } from './usersCreateWithoutNotificationsInputSchema';
import { usersUncheckedCreateWithoutNotificationsInputSchema } from './usersUncheckedCreateWithoutNotificationsInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const usersUpsertWithoutNotificationsInputSchema: z.ZodType<Prisma.usersUpsertWithoutNotificationsInput> = z.strictObject({
  update: z.union([ z.lazy(() => usersUpdateWithoutNotificationsInputSchema), z.lazy(() => usersUncheckedUpdateWithoutNotificationsInputSchema) ]),
  create: z.union([ z.lazy(() => usersCreateWithoutNotificationsInputSchema), z.lazy(() => usersUncheckedCreateWithoutNotificationsInputSchema) ]),
  where: z.lazy(() => usersWhereInputSchema).optional(),
});

export default usersUpsertWithoutNotificationsInputSchema;
