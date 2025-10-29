import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersUpdateWithoutProjectMembersInputSchema } from './usersUpdateWithoutProjectMembersInputSchema';
import { usersUncheckedUpdateWithoutProjectMembersInputSchema } from './usersUncheckedUpdateWithoutProjectMembersInputSchema';
import { usersCreateWithoutProjectMembersInputSchema } from './usersCreateWithoutProjectMembersInputSchema';
import { usersUncheckedCreateWithoutProjectMembersInputSchema } from './usersUncheckedCreateWithoutProjectMembersInputSchema';
import { usersWhereInputSchema } from './usersWhereInputSchema';

export const usersUpsertWithoutProjectMembersInputSchema: z.ZodType<Prisma.usersUpsertWithoutProjectMembersInput> = z.strictObject({
  update: z.union([ z.lazy(() => usersUpdateWithoutProjectMembersInputSchema), z.lazy(() => usersUncheckedUpdateWithoutProjectMembersInputSchema) ]),
  create: z.union([ z.lazy(() => usersCreateWithoutProjectMembersInputSchema), z.lazy(() => usersUncheckedCreateWithoutProjectMembersInputSchema) ]),
  where: z.lazy(() => usersWhereInputSchema).optional(),
});

export default usersUpsertWithoutProjectMembersInputSchema;
