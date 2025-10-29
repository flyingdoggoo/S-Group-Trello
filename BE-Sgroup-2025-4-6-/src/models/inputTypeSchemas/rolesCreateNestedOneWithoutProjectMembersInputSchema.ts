import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { rolesCreateWithoutProjectMembersInputSchema } from './rolesCreateWithoutProjectMembersInputSchema';
import { rolesUncheckedCreateWithoutProjectMembersInputSchema } from './rolesUncheckedCreateWithoutProjectMembersInputSchema';
import { rolesCreateOrConnectWithoutProjectMembersInputSchema } from './rolesCreateOrConnectWithoutProjectMembersInputSchema';
import { rolesWhereUniqueInputSchema } from './rolesWhereUniqueInputSchema';

export const rolesCreateNestedOneWithoutProjectMembersInputSchema: z.ZodType<Prisma.rolesCreateNestedOneWithoutProjectMembersInput> = z.strictObject({
  create: z.union([ z.lazy(() => rolesCreateWithoutProjectMembersInputSchema), z.lazy(() => rolesUncheckedCreateWithoutProjectMembersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => rolesCreateOrConnectWithoutProjectMembersInputSchema).optional(),
  connect: z.lazy(() => rolesWhereUniqueInputSchema).optional(),
});

export default rolesCreateNestedOneWithoutProjectMembersInputSchema;
