import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutNotificationsInputSchema } from './usersCreateWithoutNotificationsInputSchema';
import { usersUncheckedCreateWithoutNotificationsInputSchema } from './usersUncheckedCreateWithoutNotificationsInputSchema';
import { usersCreateOrConnectWithoutNotificationsInputSchema } from './usersCreateOrConnectWithoutNotificationsInputSchema';
import { usersUpsertWithoutNotificationsInputSchema } from './usersUpsertWithoutNotificationsInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateToOneWithWhereWithoutNotificationsInputSchema } from './usersUpdateToOneWithWhereWithoutNotificationsInputSchema';
import { usersUpdateWithoutNotificationsInputSchema } from './usersUpdateWithoutNotificationsInputSchema';
import { usersUncheckedUpdateWithoutNotificationsInputSchema } from './usersUncheckedUpdateWithoutNotificationsInputSchema';

export const usersUpdateOneRequiredWithoutNotificationsNestedInputSchema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutNotificationsNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => usersCreateWithoutNotificationsInputSchema), z.lazy(() => usersUncheckedCreateWithoutNotificationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutNotificationsInputSchema).optional(),
  upsert: z.lazy(() => usersUpsertWithoutNotificationsInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => usersUpdateToOneWithWhereWithoutNotificationsInputSchema), z.lazy(() => usersUpdateWithoutNotificationsInputSchema), z.lazy(() => usersUncheckedUpdateWithoutNotificationsInputSchema) ]).optional(),
});

export default usersUpdateOneRequiredWithoutNotificationsNestedInputSchema;
