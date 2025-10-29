import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { rolesCreateWithoutProjectMembersInputSchema } from './rolesCreateWithoutProjectMembersInputSchema';
import { rolesUncheckedCreateWithoutProjectMembersInputSchema } from './rolesUncheckedCreateWithoutProjectMembersInputSchema';
import { rolesCreateOrConnectWithoutProjectMembersInputSchema } from './rolesCreateOrConnectWithoutProjectMembersInputSchema';
import { rolesUpsertWithoutProjectMembersInputSchema } from './rolesUpsertWithoutProjectMembersInputSchema';
import { rolesWhereUniqueInputSchema } from './rolesWhereUniqueInputSchema';
import { rolesUpdateToOneWithWhereWithoutProjectMembersInputSchema } from './rolesUpdateToOneWithWhereWithoutProjectMembersInputSchema';
import { rolesUpdateWithoutProjectMembersInputSchema } from './rolesUpdateWithoutProjectMembersInputSchema';
import { rolesUncheckedUpdateWithoutProjectMembersInputSchema } from './rolesUncheckedUpdateWithoutProjectMembersInputSchema';

export const rolesUpdateOneRequiredWithoutProjectMembersNestedInputSchema: z.ZodType<Prisma.rolesUpdateOneRequiredWithoutProjectMembersNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => rolesCreateWithoutProjectMembersInputSchema), z.lazy(() => rolesUncheckedCreateWithoutProjectMembersInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => rolesCreateOrConnectWithoutProjectMembersInputSchema).optional(),
  upsert: z.lazy(() => rolesUpsertWithoutProjectMembersInputSchema).optional(),
  connect: z.lazy(() => rolesWhereUniqueInputSchema).optional(),
  update: z.union([ z.lazy(() => rolesUpdateToOneWithWhereWithoutProjectMembersInputSchema), z.lazy(() => rolesUpdateWithoutProjectMembersInputSchema), z.lazy(() => rolesUncheckedUpdateWithoutProjectMembersInputSchema) ]).optional(),
});

export default rolesUpdateOneRequiredWithoutProjectMembersNestedInputSchema;
