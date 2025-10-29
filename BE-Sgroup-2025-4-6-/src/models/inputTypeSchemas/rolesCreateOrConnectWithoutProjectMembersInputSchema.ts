import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { rolesWhereUniqueInputSchema } from './rolesWhereUniqueInputSchema';
import { rolesCreateWithoutProjectMembersInputSchema } from './rolesCreateWithoutProjectMembersInputSchema';
import { rolesUncheckedCreateWithoutProjectMembersInputSchema } from './rolesUncheckedCreateWithoutProjectMembersInputSchema';

export const rolesCreateOrConnectWithoutProjectMembersInputSchema: z.ZodType<Prisma.rolesCreateOrConnectWithoutProjectMembersInput> = z.strictObject({
  where: z.lazy(() => rolesWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => rolesCreateWithoutProjectMembersInputSchema), z.lazy(() => rolesUncheckedCreateWithoutProjectMembersInputSchema) ]),
});

export default rolesCreateOrConnectWithoutProjectMembersInputSchema;
