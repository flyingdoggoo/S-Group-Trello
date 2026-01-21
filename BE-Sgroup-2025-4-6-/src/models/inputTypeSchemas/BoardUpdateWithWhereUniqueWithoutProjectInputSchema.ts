import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardWhereUniqueInputSchema } from './BoardWhereUniqueInputSchema';
import { BoardUpdateWithoutProjectInputSchema } from './BoardUpdateWithoutProjectInputSchema';
import { BoardUncheckedUpdateWithoutProjectInputSchema } from './BoardUncheckedUpdateWithoutProjectInputSchema';

export const BoardUpdateWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.BoardUpdateWithWhereUniqueWithoutProjectInput> = z.strictObject({
  where: z.lazy(() => BoardWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => BoardUpdateWithoutProjectInputSchema), z.lazy(() => BoardUncheckedUpdateWithoutProjectInputSchema) ]),
});

export default BoardUpdateWithWhereUniqueWithoutProjectInputSchema;
