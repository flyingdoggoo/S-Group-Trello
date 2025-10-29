import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersCreateWithoutProjectMembersInputSchema } from './usersCreateWithoutProjectMembersInputSchema';
import { usersUncheckedCreateWithoutProjectMembersInputSchema } from './usersUncheckedCreateWithoutProjectMembersInputSchema';

export const usersCreateOrConnectWithoutProjectMembersInputSchema: z.ZodType<Prisma.usersCreateOrConnectWithoutProjectMembersInput> = z.strictObject({
  where: z.lazy(() => usersWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => usersCreateWithoutProjectMembersInputSchema), z.lazy(() => usersUncheckedCreateWithoutProjectMembersInputSchema) ]),
});

export default usersCreateOrConnectWithoutProjectMembersInputSchema;
