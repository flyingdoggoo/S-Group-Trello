import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersUpdateWithoutActionsInputSchema } from './usersUpdateWithoutActionsInputSchema';
import { usersUncheckedUpdateWithoutActionsInputSchema } from './usersUncheckedUpdateWithoutActionsInputSchema';
import { usersCreateWithoutActionsInputSchema } from './usersCreateWithoutActionsInputSchema';
import { usersUncheckedCreateWithoutActionsInputSchema } from './usersUncheckedCreateWithoutActionsInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const usersUpsertWithoutActionsInputSchema: z.ZodType<Prisma.usersUpsertWithoutActionsInput> = z.strictObject({
  update: z.union([ z.lazy(() => usersUpdateWithoutActionsInputSchema), z.lazy(() => usersUncheckedUpdateWithoutActionsInputSchema) ]),
  create: z.union([ z.lazy(() => usersCreateWithoutActionsInputSchema), z.lazy(() => usersUncheckedCreateWithoutActionsInputSchema) ]),
  where: z.lazy(() => usersWhereInputSchema).optional(),
});

export default usersUpsertWithoutActionsInputSchema;
