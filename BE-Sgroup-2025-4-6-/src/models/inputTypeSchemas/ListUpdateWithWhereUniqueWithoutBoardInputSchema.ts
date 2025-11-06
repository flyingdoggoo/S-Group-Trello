import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ListWhereUniqueInputSchema } from './ListWhereUniqueInputSchema';
import { ListUpdateWithoutBoardInputSchema } from './ListUpdateWithoutBoardInputSchema';
import { ListUncheckedUpdateWithoutBoardInputSchema } from './ListUncheckedUpdateWithoutBoardInputSchema';

export const ListUpdateWithWhereUniqueWithoutBoardInputSchema: z.ZodType<Prisma.ListUpdateWithWhereUniqueWithoutBoardInput> = z.strictObject({
  where: z.lazy(() => ListWhereUniqueInputSchema),
  data: z.union([ z.lazy(() => ListUpdateWithoutBoardInputSchema), z.lazy(() => ListUncheckedUpdateWithoutBoardInputSchema) ]),
});

export default ListUpdateWithWhereUniqueWithoutBoardInputSchema;
