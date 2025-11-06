import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardUpdateWithoutListInputSchema } from './BoardUpdateWithoutListInputSchema';
import { BoardUncheckedUpdateWithoutListInputSchema } from './BoardUncheckedUpdateWithoutListInputSchema';
import { BoardCreateWithoutListInputSchema } from './BoardCreateWithoutListInputSchema';
import { BoardUncheckedCreateWithoutListInputSchema } from './BoardUncheckedCreateWithoutListInputSchema';
import { BoardWhereInputSchema } from './BoardWhereInputSchema';

export const BoardUpsertWithoutListInputSchema: z.ZodType<Prisma.BoardUpsertWithoutListInput> = z.strictObject({
  update: z.union([ z.lazy(() => BoardUpdateWithoutListInputSchema), z.lazy(() => BoardUncheckedUpdateWithoutListInputSchema) ]),
  create: z.union([ z.lazy(() => BoardCreateWithoutListInputSchema), z.lazy(() => BoardUncheckedCreateWithoutListInputSchema) ]),
  where: z.lazy(() => BoardWhereInputSchema).optional(),
});

export default BoardUpsertWithoutListInputSchema;
