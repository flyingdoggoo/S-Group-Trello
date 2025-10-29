import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutProjectMembersInputSchema } from './usersCreateWithoutProjectMembersInputSchema';
import { usersUncheckedCreateWithoutProjectMembersInputSchema } from './usersUncheckedCreateWithoutProjectMembersInputSchema';
import { usersCreateOrConnectWithoutProjectMembersInputSchema } from './usersCreateOrConnectWithoutProjectMembersInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';

export const usersCreateNestedOneWithoutProjectMembersInputSchema: z.ZodType<Prisma.usersCreateNestedOneWithoutProjectMembersInput> = z.strictObject({
  create: z.union([ z.lazy(() => usersCreateWithoutProjectMembersInputSchema), z.lazy(() => usersUncheckedCreateWithoutProjectMembersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutProjectMembersInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
});

export default usersCreateNestedOneWithoutProjectMembersInputSchema;
