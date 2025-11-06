import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ListCreateWithoutBoardInputSchema } from './ListCreateWithoutBoardInputSchema';
import { ListUncheckedCreateWithoutBoardInputSchema } from './ListUncheckedCreateWithoutBoardInputSchema';
import { ListCreateOrConnectWithoutBoardInputSchema } from './ListCreateOrConnectWithoutBoardInputSchema';
import { ListCreateManyBoardInputEnvelopeSchema } from './ListCreateManyBoardInputEnvelopeSchema';
import { ListWhereUniqueInputSchema } from './ListWhereUniqueInputSchema';

export const ListUncheckedCreateNestedManyWithoutBoardInputSchema: z.ZodType<Prisma.ListUncheckedCreateNestedManyWithoutBoardInput> = z.strictObject({
  create: z.union([ z.lazy(() => ListCreateWithoutBoardInputSchema), z.lazy(() => ListCreateWithoutBoardInputSchema).array(), z.lazy(() => ListUncheckedCreateWithoutBoardInputSchema), z.lazy(() => ListUncheckedCreateWithoutBoardInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ListCreateOrConnectWithoutBoardInputSchema), z.lazy(() => ListCreateOrConnectWithoutBoardInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ListCreateManyBoardInputEnvelopeSchema).optional(),
  connect: z.union([ z.lazy(() => ListWhereUniqueInputSchema), z.lazy(() => ListWhereUniqueInputSchema).array() ]).optional(),
});

export default ListUncheckedCreateNestedManyWithoutBoardInputSchema;
