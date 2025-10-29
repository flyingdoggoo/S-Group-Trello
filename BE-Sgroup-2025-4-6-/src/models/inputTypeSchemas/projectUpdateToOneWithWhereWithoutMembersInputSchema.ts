import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { projectWhereInputSchema } from './projectWhereInputSchema';
import { projectUpdateWithoutMembersInputSchema } from './projectUpdateWithoutMembersInputSchema';
import { projectUncheckedUpdateWithoutMembersInputSchema } from './projectUncheckedUpdateWithoutMembersInputSchema';

export const projectUpdateToOneWithWhereWithoutMembersInputSchema: z.ZodType<Prisma.projectUpdateToOneWithWhereWithoutMembersInput> = z.strictObject({
  where: z.lazy(() => projectWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => projectUpdateWithoutMembersInputSchema), z.lazy(() => projectUncheckedUpdateWithoutMembersInputSchema) ]),
});

export default projectUpdateToOneWithWhereWithoutMembersInputSchema;
