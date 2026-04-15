import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersCreateWithoutActionsInputSchema } from './usersCreateWithoutActionsInputSchema';
import { usersUncheckedCreateWithoutActionsInputSchema } from './usersUncheckedCreateWithoutActionsInputSchema';

export const usersCreateOrConnectWithoutActionsInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutActionsInput> = z.strictObject({
  where: z.lazy(() => usersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => usersCreateWithoutActionsInputSchema), z.lazy(() => usersUncheckedCreateWithoutActionsInputSchema) ]),
});

export default usersCreateOrConnectWithoutActionsInputSchema;
