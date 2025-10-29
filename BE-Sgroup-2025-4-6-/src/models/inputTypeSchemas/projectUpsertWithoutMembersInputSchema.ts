import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { projectUpdateWithoutMembersInputSchema } from './projectUpdateWithoutMembersInputSchema';
import { projectUncheckedUpdateWithoutMembersInputSchema } from './projectUncheckedUpdateWithoutMembersInputSchema';
import { projectCreateWithoutMembersInputSchema } from './projectCreateWithoutMembersInputSchema';
import { projectUncheckedCreateWithoutMembersInputSchema } from './projectUncheckedCreateWithoutMembersInputSchema';
import { projectWhereInputSchema } from './projectWhereInputSchema';

export const projectUpsertWithoutMembersInputSchema: z.ZodType<Prisma.projectUpsertWithoutMembersInput> = z.strictObject({
  update: z.union([ z.lazy(() => projectUpdateWithoutMembersInputSchema), z.lazy(() => projectUncheckedUpdateWithoutMembersInputSchema) ]),
  create: z.union([ z.lazy(() => projectCreateWithoutMembersInputSchema), z.lazy(() => projectUncheckedCreateWithoutMembersInputSchema) ]),
  where: z.lazy(() => projectWhereInputSchema).optional(),
});

export default projectUpsertWithoutMembersInputSchema;
