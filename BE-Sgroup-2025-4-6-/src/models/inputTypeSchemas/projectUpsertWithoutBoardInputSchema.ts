import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { projectUpdateWithoutBoardInputSchema } from './projectUpdateWithoutBoardInputSchema';
import { projectUncheckedUpdateWithoutBoardInputSchema } from './projectUncheckedUpdateWithoutBoardInputSchema';
import { projectCreateWithoutBoardInputSchema } from './projectCreateWithoutBoardInputSchema';
import { projectUncheckedCreateWithoutBoardInputSchema } from './projectUncheckedCreateWithoutBoardInputSchema';
import { projectWhereInputSchema } from './projectWhereInputSchema';

export const projectUpsertWithoutBoardInputSchema: z.ZodType<Prisma.projectUpsertWithoutBoardInput> = z.strictObject({
  update: z.union([ z.lazy(() => projectUpdateWithoutBoardInputSchema), z.lazy(() => projectUncheckedUpdateWithoutBoardInputSchema) ]),
  create: z.union([ z.lazy(() => projectCreateWithoutBoardInputSchema), z.lazy(() => projectUncheckedCreateWithoutBoardInputSchema) ]),
  where: z.lazy(() => projectWhereInputSchema).optional(),
});

export default projectUpsertWithoutBoardInputSchema;
