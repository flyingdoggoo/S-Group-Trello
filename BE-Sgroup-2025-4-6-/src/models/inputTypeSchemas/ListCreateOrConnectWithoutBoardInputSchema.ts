import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ListWhereUniqueInputSchema } from './ListWhereUniqueInputSchema';
import { ListCreateWithoutBoardInputSchema } from './ListCreateWithoutBoardInputSchema';
import { ListUncheckedCreateWithoutBoardInputSchema } from './ListUncheckedCreateWithoutBoardInputSchema';

export const ListCreateOrConnectWithoutBoardInputSchema: z.ZodType<Prisma.ListCreateOrConnectWithoutBoardInput> = z.strictObject({
  where: z.lazy(() => ListWhereUniqueInputSchema),
  create: z.union([ z.lazy(() => ListCreateWithoutBoardInputSchema), z.lazy(() => ListUncheckedCreateWithoutBoardInputSchema) ]),
});

export default ListCreateOrConnectWithoutBoardInputSchema;
