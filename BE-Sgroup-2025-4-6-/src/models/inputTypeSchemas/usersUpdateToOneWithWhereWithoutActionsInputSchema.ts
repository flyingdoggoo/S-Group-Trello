import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersUpdateWithoutActionsInputSchema } from './usersUpdateWithoutActionsInputSchema';
import { usersUncheckedUpdateWithoutActionsInputSchema } from './usersUncheckedUpdateWithoutActionsInputSchema';

export const usersUpdateToOneWithWhereWithoutActionsInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutActionsInput> = z.strictObject({
  where: z.lazy(() => usersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => usersUpdateWithoutActionsInputSchema), z.lazy(() => usersUncheckedUpdateWithoutActionsInputSchema) ]),
});

export default usersUpdateToOneWithWhereWithoutActionsInputSchema;
