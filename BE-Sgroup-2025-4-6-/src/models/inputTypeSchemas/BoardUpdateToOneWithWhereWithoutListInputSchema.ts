import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardWhereInputSchema } from './BoardWhereInputSchema';
import { BoardUpdateWithoutListInputSchema } from './BoardUpdateWithoutListInputSchema';
import { BoardUncheckedUpdateWithoutListInputSchema } from './BoardUncheckedUpdateWithoutListInputSchema';

export const BoardUpdateToOneWithWhereWithoutListInputSchema: z.ZodType<Prisma.BoardUpdateToOneWithWhereWithoutListInput> = z.strictObject({
  where: z.lazy(() => BoardWhereInputSchema).optional(),
  data: z.union([ z.lazy(() => BoardUpdateWithoutListInputSchema), z.lazy(() => BoardUncheckedUpdateWithoutListInputSchema) ]),
});

export default BoardUpdateToOneWithWhereWithoutListInputSchema;
