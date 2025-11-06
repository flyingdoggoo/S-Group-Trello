import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { projectWhereInputSchema } from './projectWhereInputSchema';
import { projectUpdateWithoutBoardInputSchema } from './projectUpdateWithoutBoardInputSchema';
import { projectUncheckedUpdateWithoutBoardInputSchema } from './projectUncheckedUpdateWithoutBoardInputSchema';

export const projectUpdateToOneWithWhereWithoutBoardInputSchema: z.ZodType<Prisma.projectUpdateToOneWithWhereWithoutBoardInput> = z.strictObject({
  where: z.lazy(() => projectWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => projectUpdateWithoutBoardInputSchema), z.lazy(() => projectUncheckedUpdateWithoutBoardInputSchema) ]),
});

export default projectUpdateToOneWithWhereWithoutBoardInputSchema;
