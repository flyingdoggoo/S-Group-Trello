import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { projectWhereUniqueInputSchema } from './projectWhereUniqueInputSchema';
import { projectCreateWithoutBoardInputSchema } from './projectCreateWithoutBoardInputSchema';
import { projectUncheckedCreateWithoutBoardInputSchema } from './projectUncheckedCreateWithoutBoardInputSchema';

export const projectCreateOrConnectWithoutBoardInputSchema: z.ZodType<Prisma.projectCreateOrConnectWithoutBoardInput> = z.strictObject({
  where: z.lazy(() => projectWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => projectCreateWithoutBoardInputSchema), z.lazy(() => projectUncheckedCreateWithoutBoardInputSchema) ]),
});

export default projectCreateOrConnectWithoutBoardInputSchema;
