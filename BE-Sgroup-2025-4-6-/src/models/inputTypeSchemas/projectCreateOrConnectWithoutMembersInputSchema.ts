import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { projectWhereUniqueInputSchema } from './projectWhereUniqueInputSchema';
import { projectCreateWithoutMembersInputSchema } from './projectCreateWithoutMembersInputSchema';
import { projectUncheckedCreateWithoutMembersInputSchema } from './projectUncheckedCreateWithoutMembersInputSchema';

export const projectCreateOrConnectWithoutMembersInputSchema: z.ZodType<Prisma.projectCreateOrConnectWithoutMembersInput> = z.strictObject({
  where: z.lazy(() => projectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => projectCreateWithoutMembersInputSchema), z.lazy(() => projectUncheckedCreateWithoutMembersInputSchema) ]),
});

export default projectCreateOrConnectWithoutMembersInputSchema;
