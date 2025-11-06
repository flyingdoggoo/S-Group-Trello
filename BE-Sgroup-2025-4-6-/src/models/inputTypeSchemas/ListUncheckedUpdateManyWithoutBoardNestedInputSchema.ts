import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { ListCreateWithoutBoardInputSchema } from './ListCreateWithoutBoardInputSchema';
import { ListUncheckedCreateWithoutBoardInputSchema } from './ListUncheckedCreateWithoutBoardInputSchema';
import { ListCreateOrConnectWithoutBoardInputSchema } from './ListCreateOrConnectWithoutBoardInputSchema';
import { ListUpsertWithWhereUniqueWithoutBoardInputSchema } from './ListUpsertWithWhereUniqueWithoutBoardInputSchema';
import { ListCreateManyBoardInputEnvelopeSchema } from './ListCreateManyBoardInputEnvelopeSchema';
import { ListWhereUniqueInputSchema } from './ListWhereUniqueInputSchema';
import { ListUpdateWithWhereUniqueWithoutBoardInputSchema } from './ListUpdateWithWhereUniqueWithoutBoardInputSchema';
import { ListUpdateManyWithWhereWithoutBoardInputSchema } from './ListUpdateManyWithWhereWithoutBoardInputSchema';
import { ListScalarWhereInputSchema } from './ListScalarWhereInputSchema';

export const ListUncheckedUpdateManyWithoutBoardNestedInputSchema: z.ZodType<Prisma.ListUncheckedUpdateManyWithoutBoardNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => ListCreateWithoutBoardInputSchema), z.lazy(() => ListCreateWithoutBoardInputSchema).array(), z.lazy(() => ListUncheckedCreateWithoutBoardInputSchema), z.lazy(() => ListUncheckedCreateWithoutBoardInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => ListCreateOrConnectWithoutBoardInputSchema), z.lazy(() => ListCreateOrConnectWithoutBoardInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => ListUpsertWithWhereUniqueWithoutBoardInputSchema), z.lazy(() => ListUpsertWithWhereUniqueWithoutBoardInputSchema).array() ]).optional(),
  createMany: z.lazy(() => ListCreateManyBoardInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => ListWhereUniqueInputSchema), z.lazy(() => ListWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => ListWhereUniqueInputSchema), z.lazy(() => ListWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => ListWhereUniqueInputSchema), z.lazy(() => ListWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => ListWhereUniqueInputSchema), z.lazy(() => ListWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => ListUpdateWithWhereUniqueWithoutBoardInputSchema), z.lazy(() => ListUpdateWithWhereUniqueWithoutBoardInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => ListUpdateManyWithWhereWithoutBoardInputSchema), z.lazy(() => ListUpdateManyWithWhereWithoutBoardInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => ListScalarWhereInputSchema), z.lazy(() => ListScalarWhereInputSchema).array() ]).optional(),
});

export default ListUncheckedUpdateManyWithoutBoardNestedInputSchema;
