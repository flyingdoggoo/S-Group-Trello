import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutNotificationsInputSchema } from './usersCreateWithoutNotificationsInputSchema';
import { usersUncheckedCreateWithoutNotificationsInputSchema } from './usersUncheckedCreateWithoutNotificationsInputSchema';
import { usersCreateOrConnectWithoutNotificationsInputSchema } from './usersCreateOrConnectWithoutNotificationsInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';

export const usersCreateNestedOneWithoutNotificationsInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutNotificationsInput> = z.strictObject({
  create: z.union([ z.lazy(() => usersCreateWithoutNotificationsInputSchema), z.lazy(() => usersUncheckedCreateWithoutNotificationsInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutNotificationsInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
});

export default usersCreateNestedOneWithoutNotificationsInputSchema;
