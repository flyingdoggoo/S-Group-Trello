import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { rolesWhereInputSchema } from './rolesWhereInputSchema';
import { rolesUpdateWithoutProjectMembersInputSchema } from './rolesUpdateWithoutProjectMembersInputSchema';
import { rolesUncheckedUpdateWithoutProjectMembersInputSchema } from './rolesUncheckedUpdateWithoutProjectMembersInputSchema';

export const rolesUpdateToOneWithWhereWithoutProjectMembersInputSchema: z.ZodType<Prisma.rolesUpdateToOneWithWhereWithoutProjectMembersInput> = z.strictObject({
  where: z.lazy(() => rolesWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => rolesUpdateWithoutProjectMembersInputSchema), z.lazy(() => rolesUncheckedUpdateWithoutProjectMembersInputSchema) ]),
});

export default rolesUpdateToOneWithWhereWithoutProjectMembersInputSchema;
