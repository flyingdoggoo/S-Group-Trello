import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereInputSchema } from './usersWhereInputSchema';
import { usersUpdateWithoutProjectMembersInputSchema } from './usersUpdateWithoutProjectMembersInputSchema';
import { usersUncheckedUpdateWithoutProjectMembersInputSchema } from './usersUncheckedUpdateWithoutProjectMembersInputSchema';

export const usersUpdateToOneWithWhereWithoutProjectMembersInputSchema: z.ZodType<Prisma.usersUpdateToOneWithWhereWithoutProjectMembersInput> = z.strictObject({
  where: z.lazy(() => usersWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => usersUpdateWithoutProjectMembersInputSchema), z.lazy(() => usersUncheckedUpdateWithoutProjectMembersInputSchema) ]),
});

export default usersUpdateToOneWithWhereWithoutProjectMembersInputSchema;
