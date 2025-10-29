import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { usersCreateWithoutProjectMembersInputSchema } from './usersCreateWithoutProjectMembersInputSchema';
import { usersUncheckedCreateWithoutProjectMembersInputSchema } from './usersUncheckedCreateWithoutProjectMembersInputSchema';
import { usersCreateOrConnectWithoutProjectMembersInputSchema } from './usersCreateOrConnectWithoutProjectMembersInputSchema';
import { usersUpsertWithoutProjectMembersInputSchema } from './usersUpsertWithoutProjectMembersInputSchema';
import { usersWhereUniqueInputSchema } from './usersWhereUniqueInputSchema';
import { usersUpdateToOneWithWhereWithoutProjectMembersInputSchema } from './usersUpdateToOneWithWhereWithoutProjectMembersInputSchema';
import { usersUpdateWithoutProjectMembersInputSchema } from './usersUpdateWithoutProjectMembersInputSchema';
import { usersUncheckedUpdateWithoutProjectMembersInputSchema } from './usersUncheckedUpdateWithoutProjectMembersInputSchema';

export const usersUpdateOneRequiredWithoutProjectMembersNestedInputSchema: z.ZodType<Prisma.usersUpdateOneRequiredWithoutProjectMembersNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => usersCreateWithoutProjectMembersInputSchema), z.lazy(() => usersUncheckedCreateWithoutProjectMembersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => usersCreateOrConnectWithoutProjectMembersInputSchema).optional(),
  upsert: z.lazy(() => usersUpsertWithoutProjectMembersInputSchema).optional(),
  connect: z.lazy(() => usersWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => usersUpdateToOneWithWhereWithoutProjectMembersInputSchema), z.lazy(() => usersUpdateWithoutProjectMembersInputSchema), z.lazy(() => usersUncheckedUpdateWithoutProjectMembersInputSchema) ]).optional(),
});

export default usersUpdateOneRequiredWithoutProjectMembersNestedInputSchema;
