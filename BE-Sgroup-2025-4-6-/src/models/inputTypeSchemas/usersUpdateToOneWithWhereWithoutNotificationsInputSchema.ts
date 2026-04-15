import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersUpdateWithoutNotificationsInputSchema } from './usersUpdateWithoutNotificationsInputSchema';
import { usersUncheckedUpdateWithoutNotificationsInputSchema } from './usersUncheckedUpdateWithoutNotificationsInputSchema';

export const usersUpdateToOneWithWhereWithoutNotificationsInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutNotificationsInput> = z.strictObject({
  where: z.lazy(() => usersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => usersUpdateWithoutNotificationsInputSchema), z.lazy(() => usersUncheckedUpdateWithoutNotificationsInputSchema) ]),
});

export default usersUpdateToOneWithWhereWithoutNotificationsInputSchema;
