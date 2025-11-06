import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ListWhereUniqueInputSchema } from './ListWhereUniqueInputSchema';
import { ListUpdateWithoutBoardInputSchema } from './ListUpdateWithoutBoardInputSchema';
import { ListUncheckedUpdateWithoutBoardInputSchema } from './ListUncheckedUpdateWithoutBoardInputSchema';
import { ListCreateWithoutBoardInputSchema } from './ListCreateWithoutBoardInputSchema';
import { ListUncheckedCreateWithoutBoardInputSchema } from './ListUncheckedCreateWithoutBoardInputSchema';

export const ListUpsertWithWhereUniqueWithoutBoardInputSchema: z.ZodType<Prisma.ListUpsertWithWhereUniqueWithoutBoardInput> = z.strictObject({
  where: z.lazy(() => ListWhereUniqueInputSchema),
  update: z.union([ z.lazy(() => ListUpdateWithoutBoardInputSchema), z.lazy(() => ListUncheckedUpdateWithoutBoardInputSchema) ]),
  create: z.union([ z.lazy(() => ListCreateWithoutBoardInputSchema), z.lazy(() => ListUncheckedCreateWithoutBoardInputSchema) ]),
});

export default ListUpsertWithWhereUniqueWithoutBoardInputSchema;
