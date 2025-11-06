import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { projectCreateWithoutBoardInputSchema } from './projectCreateWithoutBoardInputSchema';
import { projectUncheckedCreateWithoutBoardInputSchema } from './projectUncheckedCreateWithoutBoardInputSchema';
import { projectCreateOrConnectWithoutBoardInputSchema } from './projectCreateOrConnectWithoutBoardInputSchema';
import { projectWhereUniqueInputSchema } from './projectWhereUniqueInputSchema';

export const projectCreateNestedOneWithoutBoardInputSchema: z.ZodType<Prisma.projectCreateNestedOneWithoutBoardInput> = z.strictObject({
  create: z.union([ z.lazy(() => projectCreateWithoutBoardInputSchema), z.lazy(() => projectUncheckedCreateWithoutBoardInputSchema) ]).optional(),
  connectOrCreate: z.lazy(() => projectCreateOrConnectWithoutBoardInputSchema).optional(),
  connect: z.lazy(() => projectWhereUniqueInputSchema).optional(),
});

export default projectCreateNestedOneWithoutBoardInputSchema;
