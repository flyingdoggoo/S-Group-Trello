import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardWhereUniqueInputSchema } from './BoardWhereUniqueInputSchema';
import { BoardUpdateWithoutProjectInputSchema } from './BoardUpdateWithoutProjectInputSchema';
import { BoardUncheckedUpdateWithoutProjectInputSchema } from './BoardUncheckedUpdateWithoutProjectInputSchema';
import { BoardCreateWithoutProjectInputSchema } from './BoardCreateWithoutProjectInputSchema';
import { BoardUncheckedCreateWithoutProjectInputSchema } from './BoardUncheckedCreateWithoutProjectInputSchema';

export const BoardUpsertWithWhereUniqueWithoutProjectInputSchema: z.ZodType<Prisma.BoardUpsertWithWhereUniqueWithoutProjectInput> = z.strictObject({
  where: z.lazy(() => BoardWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => BoardUpdateWithoutProjectInputSchema), z.lazy(() => BoardUncheckedUpdateWithoutProjectInputSchema) ]),
  create: z.union([ z.lazy(() => BoardCreateWithoutProjectInputSchema), z.lazy(() => BoardUncheckedCreateWithoutProjectInputSchema) ]),
});

export default BoardUpsertWithWhereUniqueWithoutProjectInputSchema;
