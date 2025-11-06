import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardScalarWhereInputSchema } from './BoardScalarWhereInputSchema';
import { BoardUpdateManyMutationInputSchema } from './BoardUpdateManyMutationInputSchema';
import { BoardUncheckedUpdateManyWithoutProjectInputSchema } from './BoardUncheckedUpdateManyWithoutProjectInputSchema';

export const BoardUpdateManyWithWhereWithoutProjectInputSchema: z.ZodType<Prisma.BoardUpdateManyWithWhereWithoutProjectInput> = z.strictObject({
  where: z.lazy(() => BoardScalarWhereInputSchema),
  data: z.union([ z.lazy(() => BoardUpdateManyMutationInputSchema), z.lazy(() => BoardUncheckedUpdateManyWithoutProjectInputSchema) ]),
});

export default BoardUpdateManyWithWhereWithoutProjectInputSchema;
