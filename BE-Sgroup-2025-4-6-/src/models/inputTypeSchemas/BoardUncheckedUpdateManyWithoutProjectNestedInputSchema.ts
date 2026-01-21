import type { Prisma } from '@prisma/client';

import { z } from 'zod';
import { BoardCreateWithoutProjectInputSchema } from './BoardCreateWithoutProjectInputSchema';
import { BoardUncheckedCreateWithoutProjectInputSchema } from './BoardUncheckedCreateWithoutProjectInputSchema';
import { BoardCreateOrConnectWithoutProjectInputSchema } from './BoardCreateOrConnectWithoutProjectInputSchema';
import { BoardUpsertWithWhereUniqueWithoutProjectInputSchema } from './BoardUpsertWithWhereUniqueWithoutProjectInputSchema';
import { BoardCreateManyProjectInputEnvelopeSchema } from './BoardCreateManyProjectInputEnvelopeSchema';
import { BoardWhereUniqueInputSchema } from './BoardWhereUniqueInputSchema';
import { BoardUpdateWithWhereUniqueWithoutProjectInputSchema } from './BoardUpdateWithWhereUniqueWithoutProjectInputSchema';
import { BoardUpdateManyWithWhereWithoutProjectInputSchema } from './BoardUpdateManyWithWhereWithoutProjectInputSchema';
import { BoardScalarWhereInputSchema } from './BoardScalarWhereInputSchema';

export const BoardUncheckedUpdateManyWithoutProjectNestedInputSchema: z.ZodType<Prisma.BoardUncheckedUpdateManyWithoutProjectNestedInput> = z.strictObject({
  create: z.union([ z.lazy(() => BoardCreateWithoutProjectInputSchema), z.lazy(() => BoardCreateWithoutProjectInputSchema).array(), z.lazy(() => BoardUncheckedCreateWithoutProjectInputSchema), z.lazy(() => BoardUncheckedCreateWithoutProjectInputSchema).array() ]).optional(),
  connectOrCreate: z.union([ z.lazy(() => BoardCreateOrConnectWithoutProjectInputSchema), z.lazy(() => BoardCreateOrConnectWithoutProjectInputSchema).array() ]).optional(),
  upsert: z.union([ z.lazy(() => BoardUpsertWithWhereUniqueWithoutProjectInputSchema), z.lazy(() => BoardUpsertWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  createMany: z.lazy(() => BoardCreateManyProjectInputEnvelopeSchema).optional(),
  set: z.union([ z.lazy(() => BoardWhereUniqueInputSchema), z.lazy(() => BoardWhereUniqueInputSchema).array() ]).optional(),
  disconnect: z.union([ z.lazy(() => BoardWhereUniqueInputSchema), z.lazy(() => BoardWhereUniqueInputSchema).array() ]).optional(),
  delete: z.union([ z.lazy(() => BoardWhereUniqueInputSchema), z.lazy(() => BoardWhereUniqueInputSchema).array() ]).optional(),
  connect: z.union([ z.lazy(() => BoardWhereUniqueInputSchema), z.lazy(() => BoardWhereUniqueInputSchema).array() ]).optional(),
  update: z.union([ z.lazy(() => BoardUpdateWithWhereUniqueWithoutProjectInputSchema), z.lazy(() => BoardUpdateWithWhereUniqueWithoutProjectInputSchema).array() ]).optional(),
  updateMany: z.union([ z.lazy(() => BoardUpdateManyWithWhereWithoutProjectInputSchema), z.lazy(() => BoardUpdateManyWithWhereWithoutProjectInputSchema).array() ]).optional(),
  deleteMany: z.union([ z.lazy(() => BoardScalarWhereInputSchema), z.lazy(() => BoardScalarWhereInputSchema).array() ]).optional(),
});

export default BoardUncheckedUpdateManyWithoutProjectNestedInputSchema;
