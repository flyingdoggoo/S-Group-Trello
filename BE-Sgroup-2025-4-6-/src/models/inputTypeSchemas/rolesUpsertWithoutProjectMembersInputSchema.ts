import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { rolesUpdateWithoutProjectMembersInputSchema } from './rolesUpdateWithoutProjectMembersInputSchema';
import { rolesUncheckedUpdateWithoutProjectMembersInputSchema } from './rolesUncheckedUpdateWithoutProjectMembersInputSchema';
import { rolesCreateWithoutProjectMembersInputSchema } from './rolesCreateWithoutProjectMembersInputSchema';
import { rolesUncheckedCreateWithoutProjectMembersInputSchema } from './rolesUncheckedCreateWithoutProjectMembersInputSchema';
import { rolesWhereInputSchema } from './rolesWhereInputSchema';

export const rolesUpsertWithoutProjectMembersInputSchema: z.ZodType<Prisma.rolesUpsertWithoutProjectMembersInput> = z.strictObject({
  update: z.union([ z.lazy(() => rolesUpdateWithoutProjectMembersInputSchema), z.lazy(() => rolesUncheckedUpdateWithoutProjectMembersInputSchema) ]),
  create: z.union([ z.lazy(() => rolesCreateWithoutProjectMembersInputSchema), z.lazy(() => rolesUncheckedCreateWithoutProjectMembersInputSchema) ]),
  where: z.lazy(() => rolesWhereInputSchema).optional(),
});

export default rolesUpsertWithoutProjectMembersInputSchema;
